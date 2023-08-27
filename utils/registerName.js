import { ethers } from "ethers";
import crypto from 'crypto';
import { ABI } from "./ENSABI";

const durationToRegister = 31556952 // 1 year
const resolver = '0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750'

  export async function registerName(
    signer,
    name,
    address
) {
    try {
          // Connect to the ENS Registrar Controller
    const contract = new ethers.Contract(
      '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
      ABI,
      signer
    )
    // const isNameAvaialble = await contract.available(nameToRegister)
    // Get the price of the name
    // const priceWei = Number(
    //     await contract.rentPrice(name, durationToRegister)
    // )
    // const priceEth = priceWei / Number(ethers.constants.WeiPerEther);
    // console.log(priceEth, priceWei);
    const secret = '0x' + crypto.randomBytes(32).toString('hex');
    console.log(secret);
    // Make a commitment
    const commitment = await contract.makeCommitmentWithConfig(
    name, // name
    address, // owner
    secret, // secret
    resolver, // resolver
    address // address
  )
  console.log("commitment" + commitment);
  const commit = await contract.commit(commitment);
  console.log("commited");
    // Connect to the ENS Registrar Controller
    const register = await contract.registerWithConfig(
        name, // name
        address, // owner
        durationToRegister, // duration
        secret, // secret
        resolver, // resolver
        address, // address
        {
            value: 5000000000000000, // Add 10% to account for price fluctuation; the difference is refunded.
            gasLimit: 310000,
        }
    );
    console.log("registered");
    } catch (error) {
        console.error(error);
    }
}

export async function getSecret() {
  try {
  const secret = '0x' + crypto.randomBytes(32).toString('hex');
  console.log(secret);
  } catch (error) {
      console.error(error);
  }
}

export async function renewName(
  signer,
) {
  try {
  // Connect to the ENS Registrar Controller
  const contract = new ethers.Contract(
    '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    ABI,
    signer
  )
  await contract.renew(
      "NatX.eth", // name
      31556952, // duration
      {
          value: 5000000000000000, // Add 10% to account for price fluctuation; the difference is refunded.
          gasLimit: 310000,
      }
  );
  console.log("registered");
  } catch (error) {
      console.error(error);
  }
}