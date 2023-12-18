const { ethers } = require("ethers");
const rpcUrl = 'https://cloudflare-eth.com/';
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

const address = '0xE71496283C28CC763f389bF9E36646209239588d';

const main = async () => {
    const balance = await provider.getBalance(address);
    console.log("Balance: ", ethers.utils.formatEther(balance.toString()));
}

main();