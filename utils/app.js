import { ethers } from "ethers";
require("dotenv").config();
import { BrowserProvider, parseUnits } from "ethers";
import { storeLinks, getLinks } from "../src/useFirestore";
import { registerName, renewName } from "./registerName";


var provider;
var signer;
var address;

const contractAddress = "0x228568EA92aC5Bc281c1E30b1893735c60a139F1";

// functions
// GenerateLink ✅
// retreiveLinks
// renewName
// tip
// contribute

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

export const renew = async () => {
    try {
        await renewName(signer);
        console.log("registration successful");
    } catch (error) {
        console.error(error);
    }
};




