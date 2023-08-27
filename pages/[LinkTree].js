import React from 'react';
import { useParams } from 'react-router-dom';
import Head from "next/head";
import Image from "next/image";
import Link from "../components/link";

const LinkTree = () => {
    const pathname = window.location.pathname; // Gets the current pathname
    const ENSName = pathname.slice(1); // Removes the leading slash
    console.log(ENSName);
  // call function here
  return (
    <div className="">
    <div className=" flex flex-col">
    <div className="hero mt-12 ">
      <div className="mt-12 hero-content text-center">
        <div className="flex flex-col items-center rounded-lg">
            <Image
            src="/vercel.svg"
            width={200}
            height={200}
            alt="yo"
            />
            <h1 className="catchy-headline">
                {ENSName}
            </h1>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center">
    <Link />
  </div>
  <div className="text-center">
  <a
        // href={item.link}
        className="relative inline-block px-4 py-2 font-medium group mt-4 w-[600px] mx-auto"
      >
        <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
        <span className="relative text-lg text-black catchy-headline">
              Donate
        </span>
      </a>
      <a
        // href={item.link}
        className="relative inline-block px-4 py-2 font-medium group mt-4 w-[600px] mx-auto"
      >
        <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
        <span className="relative text-lg text-black catchy-headline">
              Renew Name
        </span>
      </a>
  </div>
    </div>
  );
};

export default LinkTree;