import { ethers } from "ethers";

const apiKey = "vHq8CsWF1Oqzu8ydVT6CybvxfUUwi3Qc";
const resolverAddress = "0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750";

// const provider = new AlchemyProvider("homestead", apiKey);

// async function resolveName () {
//     // const address = "0x913613cDFB57Ad0E557F7A242AdbB26F0296D4d6";
//     // const address = "0x643aA0A61eADCC9Cc202D1915D942d35D005400C";
//     const address = "0x228568EA92aC5Bc281c1E30b1893735c60a139F1";
//     // const provider = new ethers.providers.AlchemyProvider("homestead", apiKey);
//     //const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/vHq8CsWF1Oqzu8ydVT6CybvxfUUwi3Qc");
//     const provider = new ethers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/aDreg16x2qN4ncisNMITdVDGZ2Nzz4zB");
//     try {
//         var name = "ethers.eth";
//         var balance = await provider.getBalance(address)
//         var resolvedAddress = await provider.resolveName("ethers.eth");
//         if (resolvedAddress == address) {
//             console.log(address + "resolves to " + name);
//         } else {
//             console.log("error in lookup");
//         }
//         console.log(provider, name, balance, resolvedAddress);
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function resolveName() {
//     const address = "0x643aA0A61eADCC9Cc202D1915D942d35D005400C";
//     const provider = new ethers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/aDreg16x2qN4ncisNMITdVDGZ2Nzz4zB");
//     try {
//         const name = await provider.lookupAddress(address);
//         console.log(name, provider);
//     } catch (error) {
//         console.error(error);
//     }
// }

const ResolverABI = [
    'function addr(bytes32 node) external view returns (address)',
    'function text(bytes32 node, string calldata key) external view returns (string memory)'
]

const convertString = async () => {
    const name = "NatX.eth";
    if (name.length > 32) {
        throw new Error('String is too long for bytes32');
    }

    const bytes = ethers.encodeBytes32String(name);
    console.log(bytes);
    return bytes;
};

const getAvatarURL = async () => {
    const contract = new ethers.Contract(resolverAddress, ResolverABI, signer);
    const bytes = convertString();
    const avtrurl = await contract.text(bytes, "avatar");
    console.log(avtrurl);
}

const resolve = getAvatarURL();
resolve;