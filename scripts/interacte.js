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

async function mintLand() {
    [owner, account1, account2, account3] = await ethers.getSigners()
    // land value (by minter)
    const land_value = ethers.utils.parseEther("50")
    const mintLand = await contract.connect(account1).mintLand(account2.address, "URI", land_value)
    console.log("Minted");
}


async function createInvestmentPool() {

    [owner, account1, account2, account3] = await ethers.getSigners()

    const landId = 1
    const budget = ethers.utils.parseEther("49")
    const last_delay_for_investment_in_day = 4
    const max_investor = 30
    const balance = await contract.connect(account2).ownerOf(1)
    console.log(account2.address);
    console.log(balance);

    // approving ...

    const approve = await contract.connect(account2).approve(contract.address, landId)
    console.log("PROVED");
    const createInvestmentPool_TX = await contract.connect(account2).createInvestmentPool(landId, budget, last_delay_for_investment_in_day, max_investor)
    console.log("Pool created!");
}


async function invest() {
    [owner, account1, account2, account3] = await ethers.getSigners()

    const investmentPoolId = 0
    const priceMale = 3
    const miniEntry = await contract.connect(account2).getMiniEntry(investmentPoolId)
    const converted_miniEntry = ethers.utils.formatEther(miniEntry)
    const amount = ethers.utils.parseEther(`${converted_miniEntry * priceMale}`)

    const invest_TX = await contract.connect(account3).invest(investmentPoolId, { value: amount })
    console.log("Invested");
}

async function withdrawPool() {
    [owner, account1, account2, account3] = await ethers.getSigners()
    const investmentPoolId = 0
    const withdrawPool_TX = await contract.connect(account2).withdrawPool(investmentPoolId)
    console.log("Withdrew");
}


async function payTheLoan() {

    [owner, account1, account2, account3] = await ethers.getSigners()
    const investmentPoolId = 0
    const budget = ethers.utils.parseEther("55")
    const payTheLoan_TX = await contract.connect(account2).payTheLoan(investmentPoolId, { value: budget })
    console.log("Paied");
}


// mintLand() // should remove
// createInvestmentPool()
// invest()
// withdrawPool()
// payTheLoan()