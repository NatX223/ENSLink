import { ethers, AlchemyProvider } from "ethers";

const apiKey = "vHq8CsWF1Oqzu8ydVT6CybvxfUUwi3Qc";
// const provider = new AlchemyProvider("homestead", apiKey);

async function resolveName () {
    // const address = "0x913613cDFB57Ad0E557F7A242AdbB26F0296D4d6";
    const address = "0x643aA0A61eADCC9Cc202D1915D942d35D005400C";
    // const provider = new ethers.providers.AlchemyProvider("homestead", apiKey);
    const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/vHq8CsWF1Oqzu8ydVT6CybvxfUUwi3Qc");
    ethers.pro
    try {
        var name = await provider.lookupAddress(address);
        var balance = await provider.getBalance(address)
        var resolvedAddress = await provider.resolveName("ethers.eth");
        // if (resolvedAddress == address) {
        //     console.log(address + "resolves to " + name);
        // } else {
        //     console.log("error in lookup");
        // }
        console.log(provider, name, balance, resolvedAddress);
    } catch (error) {
        console.error(error);
    }
}

const resolve = await resolveName();
resolve;