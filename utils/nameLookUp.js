import { ethers } from "ethers";

export async function nameLookUp(
    provider,
    name,
    address
) {
    try {
        var balance = await provider.getBalance(address);
        var resolvedAddress = await provider.resolveName(name); // "ethers.eth"
        if (resolvedAddress == address) {
            console.log(address + "resolves to " + name);
        } else {
            console.log("Address and Name does not match");
        }
        // console.log(provider, name, balance, resolvedAddress);
    } catch (error) {
        console.error(error);
    }
}
