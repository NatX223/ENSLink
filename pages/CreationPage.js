import LandingPage from "../components/LandingPage";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAccount, useSigner, useProvider } from "wagmi";
import { registerName } from "../utils/registerName";

const Home = () => {
  const { data: signer } = useSigner(5);
  const provider = useProvider(5);
  const { address, isConnected } = useAccount();

  const [ENSNameValue, setENSName] = useState(
    "ENS Name"
  );

  const [TwitterHandleValue, setTwitterHandle] = useState(
    "Twitter Link"
  );

  const [InstagramHandleValue, setInstagramHandle] = useState(
    "Instagram Link"
  );

  const [ThreadsHandleValue, setThreadsHandle] = useState(
    "Threads Link"
  );

  const [WebsiteValue, setWebsite] = useState(
    "Website Link"
  );

  const handleENSNameValueChange = (event) => {
    setENSName(event.target.value);
  };

  const handleTwitterHandleValueChange = (event) => {
    setTwitterHandle(event.target.value);
  };

  const handleInstagramHandleValueChange = (event) => {
    setInstagramHandle(event.target.value);
  };

  const handleThreadsHandleValueChange = (event) => {
    setThreadsHandle(event.target.value);
  };

  const handleWebsiteValueChange = (event) => {
    setWebsite(event.target.value);
  };

  return (
    <div>
        <Navbar />
        <div className="card lg:card-side bg-white border-[4px] border-[#f2dbd0] ml-12 mr-12 rounded-2xl">
        {/* give the whole card some spacing and padding */}
        <div className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">ENS Name</span>
            </label>
            <input
              id="ENSName"
              type="text"
              className="input input-bordered"
              value={ENSNameValue}
              onChange={handleENSNameValueChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Twitter</span>
            </label>
            <input
              id="twitterHandle"
              type="text"
              className="input input-bordered"
              value={TwitterHandleValue}
              onChange={handleTwitterHandleValueChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instagram</span>
            </label>
            <input
              id="instagramHandle"
              type="text"
              className="input input-bordered"
              value={InstagramHandleValue}
              onChange={handleInstagramHandleValueChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Threads</span>
            </label>
            <input
              id="threadsHandle"
              type="text"
              className="input input-bordered"
              value={ThreadsHandleValue}
              onChange={handleThreadsHandleValueChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Website/blog</span>
            </label>
            <input
              id="website"
              type="text"
              className="input input-bordered"
              value={WebsiteValue}
              onChange={handleWebsiteValueChange}
            />
          </div>
          <div className="form-control mt-6">
            <button
              onClick={async () => {
                try {
                  toast("Generating Link");
                    await registerName(signer, ENSNameValue, address);
                  toast("project created");
                } catch (e) {
                  console.log(e);
                  toast.error("Failed to create project because of " + e.message);
                }              
              }}
              className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto  text-center"
            >
              <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
              <span className="relative text-black text-center">
                Get Link
              </span>
            </button>
          </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
