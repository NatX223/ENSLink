import { ethers } from "ethers";
require("dotenv").config();
import { BrowserProvider, parseUnits } from "ethers";
import { storeLinks, getLinks } from "../src/useFirestore";
import { registerName, renewName } from "./registerName";
import { ABI } from "./ENSABI";
import { ResolverABI } from "./ResolverABI";
import { useEnsAddress, useEnsAvatar, useEnsName } from 'wagmi'

var provider;
var signer;
var address;

const contractAddress = "0x228568EA92aC5Bc281c1E30b1893735c60a139F1";
const resolverAddress = "0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750";

// functions
// GenerateLink ✅
// retreiveLinks ✅
// renewName ✅
// tip ✅
// Avatar
// name resolution
// navBar

export const connectWallet = async () => {
    provider = new ethers.BrowserProvider(window.ethereum);
  
    await provider.send("eth_requestAccounts", []);
  
    signer = await provider.getSigner();
  
    console.log(signer);
}

export const getUserAddress = async () => {
    address = await signer.address;
    return address;
}

export const resolveName = async (name) => {
    try {
        const address = await getUserAddress();
        var resolvedAddress = await provider.resolveName(name);
        if (resolvedAddress == address) {
            return true;
        } else {
            return false
        }
    } catch (error) {
        console.error(error);
    }
};

export const createLinkTree = async (ENSName, twitterLink, instagramLink, threadsLink, website) => {
    const userAddress = await getUserAddress();
    try {
        await storeLinks(userAddress, ENSName, twitterLink, instagramLink, threadsLink, website);
        console.log("storage successful");
        return true;
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

const convertString = async (name) => {
    if (name.length > 32) {
        throw new Error('String is too long for bytes32');
    }
    const bytes = ethers.encodeBytes32String(name);
    return bytes;
};

const getAvatarURL = async (name) => {
    const contract = new ethers.Contract(resolverAddress, ResolverABI, signer);
    const bytes = convertString(name);
    const avtrurl = await contract.text(bytes, "avatar");
    console.log(avtrurl);
}

export const setLinks = async () => {
    try {
        const contract = new ethers.Contract(resolverAddress, ResolverABI, signer);
        const bytes = convertString("NatX.eth");
        await contract.setText(bytes, "com.github", "https://github.com/NatX223");
        console.log("done");
    } catch (error) {
        console.error(error);
    }
}
