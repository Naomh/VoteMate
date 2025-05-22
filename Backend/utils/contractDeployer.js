const accountConfig = require('../config.json');
const web3 = new (require('web3'))(accountConfig.network);

const link = async(contract, libraryName, libraryAddress ) =>{ 
    const chainId = await web3.eth.getChainId();
    if(!contract.networks || !contract.networks[chainId]){
        contract.networks = {};
        contract.networks[chainId] = {links: {}};
    }
    contract.networks[chainId].links[libraryName] = libraryAddress;
    let symbol = "__" + libraryName + "_".repeat(40 - libraryName.length - 2);
    const bytecode = contract.bytecode;
    contract.bytecode = bytecode.split(symbol).join(libraryAddress.toLowerCase().substr(2))
    const deployedBytecode = contract.deployedBytecode
    contract.deployedBytecode = deployedBytecode.split(symbol).join(libraryAddress.toLowerCase().substr(2))
    return contract;
}

const deployContract = async (contract, arguments) => {
    try{
        const account = web3.eth.accounts.privateKeyToAccount(accountConfig.account_pk);
        web3.eth.accounts.wallet.add(account);
        const c = new web3.eth.Contract(contract.abi);
        const deployer = await c.deploy({data: contract.bytecode, arguments: arguments});
        const gas = await deployer.estimateGas({
            from: account.address
        });

        const nonce = await web3.eth.getTransactionCount(account.address, "pending");

        const tx = await deployer.send({
            from: account.address,
            gas,
            nonce
        })
        
        const code = await web3.eth.getCode(tx.options.address);
        if (code === "0x") {
            console.error("the contract was not deployed, address:", tx.options.address);
        }else{
            console.log('contract deployed at:', contract.contractName, tx.options.address);
        }

        return tx.options.address;
    }catch(e){
        console.error('contract couldn\'t be deployed due to error:', e);
    }
};

module.exports = {deployContract, link};