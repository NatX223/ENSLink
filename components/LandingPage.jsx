import React from "react";
import Head from 'next/head';

const LandingPage = () => {
    return <div className="">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
        <div className=" flex flex-col">
          <div className="hero mt-12 ">
            <div className="mt-12 hero-content text-center">
              <div>
                <h1 className="text-6xl  text-black catchy-headline">
                  Enhance and Personalize your online presence by using your ENS name as your linktree
                </h1>
                <br />
                <a
                  href="/CreationPage"
                  className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto"
                >
                  <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#9dd0eb] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#9dd0eb]"></span>
                  <span className="relative text-lg text-black">
                    Get started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 mb-72">
          <div className="mb-24 ">
            <h1 className="text-2xl text-black ml-8">  </h1>
          </div>
        </div>
        <footer className="bg-[#f2dbd0]">
          <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <h1 className="text-2xl text-black">Made with ❤️ by NatX et Mercy</h1>
          </div>
        </footer>
      </div>;
  }


export default LandingPage;
