//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.8;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract MintLand is ERC721URIStorage {
    using Counters for Counters.Counter;

    // ---------------------- Var -------------
    Counters.Counter public _tokenIds;
    Counters.Counter public _investementIds;

    mapping(uint256 => LAND) public IdToLand;
    mapping(uint256 => INVESTMENT) private idToInvestmentPool;
    mapping(uint256 => uint256) public InvestmentPoolBalance;
    mapping(address => mapping(uint256 => uint256)) public InvestorBalance;
    mapping(uint256 => bool) private IsLandOnSell;
    mapping(address => uint256[]) private investorPool;

    address public minterAddress;

    struct LAND {
        uint256 id;
        address owner;
        uint256 value; //@dev minter can set a value to the land (we'll use it later)
    }

    struct INVESTMENT {
        uint256 id;
        uint256 landId;
        address[] investors;
        address owner;
        uint256 totalBudget;
        uint256 createdAt;
        uint256 lastDelayForInvestInDays;
        INVEST_STATUS status;
        uint256 minEntry;
        uint256 maxInvestors;
    }

    enum INVEST_STATUS {
        CREATED,
        WITHDREW,
        PAIED,
        BANNED
    }

    // ------------------- Events -------------------
    event landMinted(
        uint256 indexed landId,
        address indexed landOwner,
        string landURI
    );

    event investPoolCreated(
        uint256 indexed investRId,
        address indexed owner,
        uint256 indexed landId
    );

    event newInvestor(uint256 indexed investPoolId, address indexed investor);
    event loanWithdraw(uint256 indexed investPoolId, address indexed landOwner);
    event loanPaied(uint256 indexed investPoolId, address indexed landOwner);
    event landBanned(uint256 indexed landId);
    event bannedLandSold(uint256 indexed landId);

    constructor(address _minterAddress) ERC721("FarmLand", "FML") {
        minterAddress = _minterAddress;
    }

    // @dev create a modifier! only the minter address can do some stuff in our contract.

    modifier onlyMinter() {
        require(msg.sender == minterAddress, "only minter");
        _;
    }

    // @dev minter should be an admin or raisponasble!  only one address can mint
    function mintLand(
        address _landOwner,
        string memory _tokenURI,
        uint256 _value
    ) external onlyMinter {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(_landOwner, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        IdToLand[newItemId].id = newItemId;
        IdToLand[newItemId].owner = _landOwner;
        IdToLand[newItemId].value = _value;
        emit landMinted(newItemId, _landOwner, _tokenURI);
    }

    function userBalance(address _user) external view returns (uint256) {
        uint256 balance = IERC721(address(this)).balanceOf(_user);
        return balance;
    }

    // @dev this function is called by an owner land to get some investors to his land !
    function createInvestmentPool(
        uint256 _landId,
        uint256 _budget,
        uint256 _lastDelayForInvestInDays,
        uint256 _maxInvestor
    ) external {
        LAND memory land = IdToLand[_landId];
        require(land.owner == msg.sender, "not Owner");
        require(land.value >= _budget, "over price");
        _investementIds.increment();
        uint256 currentId = _investementIds.current();
        idToInvestmentPool[currentId].id = currentId;
        idToInvestmentPool[currentId].landId = _landId;
        idToInvestmentPool[currentId].owner = msg.sender;
        idToInvestmentPool[currentId].totalBudget = _budget;
        idToInvestmentPool[currentId].status = INVEST_STATUS.CREATED;
        idToInvestmentPool[currentId].createdAt = block.timestamp;

        idToInvestmentPool[currentId].lastDelayForInvestInDays =
            _lastDelayForInvestInDays *
            1 days;
        idToInvestmentPool[currentId].minEntry = _budget / _maxInvestor;
        idToInvestmentPool[currentId].maxInvestors = _maxInvestor;
        console.log(
            "TIME  = '%s'",
            idToInvestmentPool[currentId].lastDelayForInvestInDays
        );
        IERC721(address(this)).transferFrom(msg.sender, address(this), _landId);
        emit investPoolCreated(currentId, msg.sender, _landId);
    }

    // @dev to add be investor ...
    function invest(uint256 _investmentPoolId) external payable {
        INVESTMENT memory investment = idToInvestmentPool[_investmentPoolId];
        console.log(
            "pool time end = '%s'",
            idToInvestmentPool[_investmentPoolId].minEntry
        );
        console.log("block time = '%s'", block.timestamp);
        require(investment.status == INVEST_STATUS.CREATED, "Closed");
        // console.log(
        //     "investment.totalBudget  = '%s' // value+poolBalance = '%s'",
        //     investment.totalBudget,
        //     InvestmentPoolBalance[_investmentPoolId] + msg.value
        // );
        require(
            investment.totalBudget >=
                InvestmentPoolBalance[_investmentPoolId] + msg.value,
            "full"
        );
        require(
            block.timestamp <=
                investment.createdAt + investment.lastDelayForInvestInDays,
            "end"
        );
        require(
            (msg.value % 2) / (10**18) == 0,
            "wrong value"
        );
        console.log(
            "TEST  = '%s'",
            (msg.value % investment.minEntry) / (10**18)
        );
        if (isInvestorExist(msg.sender, _investmentPoolId) == false) {
            idToInvestmentPool[_investmentPoolId].investors.push(msg.sender);

            investorPool[msg.sender].push(_investmentPoolId);
        }
        InvestorBalance[msg.sender][_investmentPoolId] += msg.value;
        InvestmentPoolBalance[_investmentPoolId] += msg.value;

        emit newInvestor(_investmentPoolId, msg.sender);
    }

    // @dev investment owner can withdraw the pool.

    function withdrawPool(uint256 _investmentPoolId) external {
        INVESTMENT memory investment = idToInvestmentPool[_investmentPoolId];
        require(investment.owner == msg.sender, "not owner");
        uint256 investBalance = InvestmentPoolBalance[_investmentPoolId];
        idToInvestmentPool[_investmentPoolId].status = INVEST_STATUS.WITHDREW;
        InvestmentPoolBalance[_investmentPoolId] = 0;
        (bool sent, ) = payable(investment.owner).call{value: investBalance}(
            ""
        );
        require(sent, "failed");
        emit loanWithdraw(_investmentPoolId, msg.sender);
    }

    // @dev give the loan back;
    function payTheLoan(uint256 _investmentPoolId) external payable {
        INVESTMENT memory investment = idToInvestmentPool[_investmentPoolId];
        require(investment.owner == msg.sender, "not owner");
        //console.log("STATUTs = '%s'",investment.status);
        require(investment.status == INVEST_STATUS.WITHDREW, "Nop");
        console.log(
            "created at+ year = '%s' and block = '%s'",
            (investment.createdAt + 365 days),
            block.timestamp
        );
        require(block.timestamp < (investment.createdAt + 365 days), "late");
        require(
            investment.totalBudget <=
                msg.value + ((investment.totalBudget * 11) / 100),
            "not enough"
        );
        idToInvestmentPool[_investmentPoolId].status = INVEST_STATUS.PAIED;
        console.log("BEFORE ");
        ERC721(address(this)).transferFrom(
            address(this),
            msg.sender,
            investment.landId
        );
        emit loanPaied(_investmentPoolId, msg.sender);
    }

    function claim(uint256 _investmentPoolId) external {
        INVESTMENT memory investment = idToInvestmentPool[_investmentPoolId];
        require(investment.status == INVEST_STATUS.PAIED, "not paied");
        console.log(
            "balance  ='%s' ",
            InvestorBalance[msg.sender][_investmentPoolId]
        );
        console.log(
            "balance  ='%s' ",
            (InvestorBalance[msg.sender][_investmentPoolId] * 10) / 100
        );
        uint256 investorShare = InvestorBalance[msg.sender][_investmentPoolId] +
            ((InvestorBalance[msg.sender][_investmentPoolId] * 10) / 100);
        InvestorBalance[msg.sender][_investmentPoolId] = 0;
        (bool sent, ) = payable(msg.sender).call{value: investorShare}("");
        require(sent, "faild");
    }

    function sellLand(uint256 _investmentPoolId) external onlyMinter {
        INVESTMENT memory investment = idToInvestmentPool[_investmentPoolId];
        require(investment.createdAt + 365 days < block.timestamp, "not yet");
        require(investment.status != INVEST_STATUS.PAIED, "Paied");
        IsLandOnSell[investment.landId] = true;
        idToInvestmentPool[_investmentPoolId].status = INVEST_STATUS.BANNED;
        IdToLand[investment.landId].owner = address(this);
        emit landBanned(investment.landId);
    }

    function buyABannedLand(uint256 _investmentPoolId) external payable {
        INVESTMENT memory investment = idToInvestmentPool[_investmentPoolId];
        require(investment.status == INVEST_STATUS.BANNED, "Wrong");
        require(IdToLand[investment.landId].value <= msg.value, "not enough");
        idToInvestmentPool[_investmentPoolId].status = INVEST_STATUS.PAIED;
        InvestorBalance[investment.owner][_investmentPoolId] = 10; // need to be fix
        emit bannedLandSold(investment.landId);
    }

    // VIEWS

    function isInvestorExist(address _investorAddress, uint256 _investmentPool)
        public
        view
        returns (bool)
    {
        INVESTMENT memory investment = idToInvestmentPool[_investmentPool];

        for (uint256 index = 0; index < investment.investors.length; index++) {
            if (investment.investors[index] == _investorAddress) {
                console.log("TRUE");
                return true;
            }
        }
        console.log("False");
        return false;
    }

    function getInvstementPoolDetail(uint256 _poolId)
        external
        view
        returns (INVESTMENT memory)
    {
        return idToInvestmentPool[_poolId];
    }

    function getInvestmentPoolBalance(uint256 _poolId)
        external
        view
        returns (uint256)
    {
        return InvestmentPoolBalance[_poolId];
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function getMiniEntry(uint256 _poolId) external view returns (uint256) {
        INVESTMENT memory pool = idToInvestmentPool[_poolId];
        return pool.minEntry;
    }

    function getInvestorInvestments(address _investorAddress)
        external
        view
        returns (uint256[] memory)
    {
        uint256[] memory investorTotalInvestmentPools = investorPool[
            _investorAddress
        ];
        return investorTotalInvestmentPools;
    }
}
