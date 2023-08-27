import { ethers } from "ethers";

export async function nameLookUp(
    signer,
    provider,
    name,
    address
) {
    try {
        // var balance = await provider.getBalance(address);
        const lookUpName = await signer.lookupAddress("0x228568EA92aC5Bc281c1E30b1893735c60a139F1");
        // var resolvedAddress = await signer.resolveName(name); // "ethers.eth"
        // if (resolvedAddress == address) {
        //     console.log(address + "resolves to " + name);
        // } else {
        //     console.log("Address and Name does not match");
        // }
        console.log(lookUpName);
        // console.log(provider, name, balance, resolvedAddress);
        console.log(resolvedAddress);
    } catch (error) {
        console.error(error);
    }
}
