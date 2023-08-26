import { ethers, AlchemyProvider } from "ethers";

const apiKey = "vHq8CsWF1Oqzu8ydVT6CybvxfUUwi3Qc";
// const provider = new AlchemyProvider("homestead", apiKey);

async function resolveName () {
    // const address = "0x913613cDFB57Ad0E557F7A242AdbB26F0296D4d6";
    // const address = "0x643aA0A61eADCC9Cc202D1915D942d35D005400C";
    const address = "0x6Be57C552E045C2Bc4996874D2bFa619250C60Ba";
    // const provider = new ethers.providers.AlchemyProvider("homestead", apiKey);
    //const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/vHq8CsWF1Oqzu8ydVT6CybvxfUUwi3Qc");
    const provider = new ethers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/aDreg16x2qN4ncisNMITdVDGZ2Nzz4zB");
    try {
        var name = await provider.lookupAddress("0x228568EA92aC5Bc281c1E30b1893735c60a139F1");
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