import { ethers } from "ethers";
require("dotenv").config();
import { BrowserProvider, parseUnits } from "ethers";
import { storeLinks, getLinks } from "../src/useFirestore";
import { registerName, renewName } from "./registerName";
import { ABI } from "./ENSABI";

var provider;
var signer;
var address;

const contractAddress = "0x228568EA92aC5Bc281c1E30b1893735c60a139F1";

// functions
// GenerateLink ✅
// retreiveLinks ✅
// renewName ✅
// tip 

export const connectWallet = async () => {
    provider = new ethers.BrowserProvider(window.ethereum);
  
    await provider.send("eth_requestAccounts", []);
  
    signer = await provider.getSigner();
  
    console.log(signer);
}

export const getAddress = async () => {
    address = await signer.address;
    return address;
}

export const resolveName = async (name, address) => {
    try {
        var balance = await provider.getBalance(address)
        var resolvedAddress = await provider.resolveName("ethers.eth");
        if (resolvedAddress == address) {
            console.log(address + "resolves to " + name);
        } else {
            console.log("error in lookup");
        }
        console.log(provider, name, balance, resolvedAddress);
    } catch (error) {
        console.error(error);
    }
};


export const createLinkTree = async (ENSName, twitterLink, instagramLink, threadsLink, website) => {
    try {
        const userAddress = await getAddress();
        await storeLinks(userAddress, ENSName, twitterLink, instagramLink, threadsLink, website);
        console.log("storage successful");
    } catch (error) {
        console.error(error);
    }
};

export const retrieveLinkTree = async (ENSName) => {
    try {
        const links = await getLinks(ENSName);
        console.log("storage successful", links);
        return links;
    } catch (error) {
        console.error(error);
    }
} ;

export const renew = async (ENSName) => {
    try {
        const contract = new ethers.Contract(contractAddress, ABI, signer);
        await contract.renew(
            ENSName, // name
            31556952, // duration - one year
            {
                value: 5000000000000000,
                gasLimit: 310000,
            }
        );
        console.log("Renewed");
    } catch (error) {
        console.error(error);
    }
};

export const tip = async (address, amount) => {
    const _value = amount.toString();
    const weiValue = ethers.parseEther(amount);
    try {
        tx = await signer.sendTransaction({
            to: address,
            value: weiValue
          });
          receipt = await tx.wait();
        console.log("tipped successfully", _value);
    } catch (error) {
        console.error(error);
    }
};
