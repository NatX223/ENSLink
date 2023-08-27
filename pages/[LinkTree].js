import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "../components/link";
import { useEffect, useState } from "react";
import { retrieveLinkTree } from '@/utils/app';

const LinkTree = () => {
  const pathname = window.location.pathname; // Gets the current pathname
  const ENSName = pathname.slice(1); // Removes the leading slash
  console.log(ENSName);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
        setIsLoading(true);
        try {
          const docs = await retrieveLinkTree(ENSName);
          setData(docs);
          console.log(docs, "man", docs[0]);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div style={{ color: 'black' }}>Loading...</div>;
  }

  if (data) {
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
    {data &&
      data.map((casee, index) => (
        <Link key={index} item={casee} />
      ))}
    </div>
    <div className="text-center">
    <button
          // href={item.link}
          className="relative inline-block px-4 py-2 font-medium group mt-4 w-[600px] mx-auto"
        >
          <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
          <span className="relative text-lg text-black catchy-headline">
                Tip
          </span>
        </button>
        <button
          // href={item.link}
          className="relative inline-block px-4 py-2 font-medium group mt-4 w-[600px] mx-auto"
        >
          <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
          <span className="relative text-lg text-black catchy-headline">
                Renew Name
          </span>
        </button>
    </div>
      </div>
    );
  }
};

export default LinkTree;