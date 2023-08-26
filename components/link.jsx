import React from "react";
import Head from 'next/head';

const Link = () => {
    return <div className="">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <a
        href="/CreationPage"
        className="relative inline-block px-4 py-2 font-medium group mt-4 w-[600px] mx-auto"
      >
        <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
        <span className="relative text-lg text-black catchy-headline">
              twiiter
        </span>
      </a>
      </div>;
  }


export default Link;
