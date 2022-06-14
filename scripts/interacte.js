const { ethers } = require("hardhat");

const contract_abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_minterAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "landId",
        "type": "uint256"
      }
    ],
    "name": "bannedLandSold",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "investRId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "landId",
        "type": "uint256"
      }
    ],
    "name": "investPoolCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "landId",
        "type": "uint256"
      }
    ],
    "name": "landBanned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "landId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "landOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "landURI",
        "type": "string"
      }
    ],
    "name": "landMinted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "investPoolId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "landOwner",
        "type": "address"
      }
    ],
    "name": "loanPaied",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "investPoolId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "landOwner",
        "type": "address"
      }
    ],
    "name": "loanWithdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "investPoolId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "investor",
        "type": "address"
      }
    ],
    "name": "newInvestor",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "IdToLand",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "InvestorBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_investementIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_tokenIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_investmentPoolId",
        "type": "uint256"
      }
    ],
    "name": "buyABannedLand",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_investmentPoolId",
        "type": "uint256"
      }
    ],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_landId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_budget",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_lastDelayForInvestInDays",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_maxInvestor",
        "type": "uint256"
      }
    ],
    "name": "createInvestmentPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getContractBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_poolId",
        "type": "uint256"
      }
    ],
    "name": "getInvestmentPoolBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_investorAddress",
        "type": "address"
      }
    ],
    "name": "getInvestorInvestments",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_poolId",
        "type": "uint256"
      }
    ],
    "name": "getInvstementPoolDetail",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "landId",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "investors",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "totalBudget",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastDelayForInvestInDays",
            "type": "uint256"
          },
          {
            "internalType": "enum MintLand.INVEST_STATUS",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "minEntry",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxInvestors",
            "type": "uint256"
          }
        ],
        "internalType": "struct MintLand.INVESTMENT",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_poolId",
        "type": "uint256"
      }
    ],
    "name": "getMiniEntry",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_investmentPoolId",
        "type": "uint256"
      }
    ],
    "name": "invest",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_investorAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_investmentPool",
        "type": "uint256"
      }
    ],
    "name": "isInvestorExist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_landOwner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_tokenURI",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "mintLand",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minterAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_investmentPoolId",
        "type": "uint256"
      }
    ],
    "name": "payTheLoan",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_investmentPoolId",
        "type": "uint256"
      }
    ],
    "name": "sellLand",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "userBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_investmentPoolId",
        "type": "uint256"
      }
    ],
    "name": "withdrawPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
 
const contract_address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

//const erc_721 = new ethers.Contract(contract_address, erc_721_abi)

const contract = new ethers.Contract(contract_address, contract_abi)


async function getAddress(){
  [owner, account1, account2, account3,account4] = await ethers.getSigners()
  console.log('owner',owner.address);

console.log('account1',account1.address);
console.log('account2',account2.address);
console.log('account3',account3.address);
console.log('account4',account4.address);

}


async function mintLand() {
    [owner, account1, account2, account3,account4] = await ethers.getSigners()
    // land value (by minter)
    const land_value = ethers.utils.parseEther("50")
    const mintLand = await contract.connect(account2).mintLand(account1.address, "URI", land_value)
    console.log("Minted",mintLand);
    console.log(account1.address);
}


async function createInvestmentPool() {

    [owner, account1, account2, account3] = await ethers.getSigners()

    const landId = 1
    const budget = ethers.utils.parseEther("40")
    const last_delay_for_investment_in_day = 4
    const max_investor = 30
    const balance = await contract.connect(account1).ownerOf(1)
    // console.log(account1.address);
    console.log('balance',balance);

    // approving ...

    const approve = await contract.connect(account1).approve(contract.address, landId)
    console.log("PROVED");
    const createInvestmentPool_TX = await contract.connect(account1).createInvestmentPool(landId, budget, last_delay_for_investment_in_day, max_investor)
    console.log("Pool created!");
}


async function invest() {
    [owner, account1, account2, account3,account4] = await ethers.getSigners()

    const investmentPoolId = 1
    const  priceMale = 3

    const miniEntry = await contract.connect(account3).getMiniEntry(investmentPoolId)
    const converted_miniEntry = ethers.utils.formatEther(miniEntry)
    const amount = ethers.utils.parseEther(`${converted_miniEntry * priceMale}`)
    console.log(account3.address);
    console.log(converted_miniEntry * priceMale);

    const invest_TX = await contract.connect(account3).invest(investmentPoolId, { value: amount })
    console.log("Invested");
}

async function withdrawPool() {
    [owner, account1, account2, account3] = await ethers.getSigners()
    const investmentPoolId = 1
    const withdrawPool_TX = await contract.connect(account1).withdrawPool(investmentPoolId)
    console.log("Withdrew");
}


async function payTheLoan() {

    [owner, account1, account2, account3] = await ethers.getSigners()
    const investmentPoolId = 1
    const budget = ethers.utils.parseEther("55.5")
    const payTheLoan_TX = await contract.connect(account1).payTheLoan(investmentPoolId, { value: budget })
    console.log("Paied");
}

const getAllInvestmentPools = async () => {
    const [owner, account1, account2, account3, account4] = await ethers.getSigners();
    const allInvestmentPools = await contract.connect(owner)._investementIds();
    for(let index = 1; index <= allInvestmentPools; index++){
      const investDetail = await contract.connect(owner).getInvstementPoolDetail(index);
      console.log(investDetail);
    }
    console.log(allInvestmentPools);
  
  }

  async function getLandDetail() {
    const [owner, account1, account2, account3, account4] =
      await ethers.getSigners();
    const allTokens = await contract.connect(account2)._tokenIds();
    for (let index = 1; index <= allTokens; index++) {
      const ownerO = await contract.connect(account2).ownerOf(index);
      if (ownerO === account2.address) {
        const landDetail = await contract.connect(account2).IdToLand(index);
        console.log(landDetail);
      }
    }
  }

  async function getUserInvestments() {
    const [owner, account1, account2, account3, account4] =
      await ethers.getSigners();
    const allInvestments = await contract.connect(account2)._investementIds();
  
    for (let index = 1; index <= allInvestments; index++) {
      const investDetail = await contract
        .connect(account2)
        .getInvstementPoolDetail(index);
      const invest_investors = investDetail.investors;
  
      for (let index_2 = 0; index_2 < invest_investors.length; index_2++) {
        if (account3.address === invest_investors[index_2]) {
          console.log(investDetail);
        }
      }
    }
  }
  const userPools = async () => {
    const [owner, account1, account2, account3, account4] =
      await ethers.getSigners();
    const allTokens = await contract.connect(account2)._investementIds();
    for (let index = 1; index <= allTokens; index++) {
      const investDetail = await contract
        .connect(account2)
        .getInvstementPoolDetail(index);
  
      if (investDetail.owner === account3.address) {
        const investDetail = await contract
          .connect(account2)
          .getInvstementPoolDetail(index);
        console.log(investDetail);
      }
    }
  };

  async function investorBalance(){
    investor_balance = await contract.investorBalance(signerAddress,investPoolId)
  }


     async function getMinter(){
      const [owner, account1, account2, account3, account4] = await ethers.getSigners();

      const minterAddress = await contract.connect(owner).minterAddress()
      console.log("minter",minterAddress);
    }



// mintLand() // should remove
// createInvestmentPool()
// invest()
// withdrawPool()

// payTheLoan()
// getAllInvestmentPools()
// getUserInvestments()

// userPools()


// getLandDetail()

// getAddress()

// getMinter()


// npx hardhat compile => compile
// npx hardhat run scripts/deploy.js --network localhost => run scripts bach deployer smart contract
// npx hardhat node = > create local blockchain

// npx hardhat test test/sample-test.js --network localhost => run scripts bach dir les test ela smart contract