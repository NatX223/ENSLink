import { ethers } from "ethers";
import { ENSControllerABI } from "./ENSControllerABI";
require("dotenv").config();

const ENSControllerAddress = "0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5";

var provider;
var signer;

export const connectWallet = async () => {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  
    await provider.send("eth_requestAccounts", []);
  
    signer = provider.getSigner();
  
    console.log(signer);
};

