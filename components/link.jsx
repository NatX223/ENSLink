import React from "react";
import Head from 'next/head';

const Link = ({ item }) => {
    return <div className="">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <a
        href={item.Twitter}
        className="relative inline-block px-4 py-2 font-medium group mt-4 w-[600px] mx-auto"
      >
        <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
        <span className="relative text-lg text-black catchy-headline">
          Twitter 
        </span>
      </a>
      <a
        href={item.Instagram}
        className="relative inline-block px-4 py-2 font-medium group mt-4 w-[600px] mx-auto"
      >
        <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
        <span className="relative text-lg text-black catchy-headline">
          Instagram
        </span>
      </a>
      <a
        href={item.Threads}
        className="relative inline-block px-4 py-2 font-medium group mt-4 w-[600px] mx-auto"
      >
        <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
        <span className="relative text-lg text-black catchy-headline">
              Threads
        </span>
      </a>
      <a
        href={item.Website}
        className="relative inline-block px-4 py-2 font-medium group mt-4 w-[600px] mx-auto"
      >
        <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
        <span className="relative text-lg text-black catchy-headline">
              Website
        </span>
      </a>
      </div>;
  }


export default Link;
