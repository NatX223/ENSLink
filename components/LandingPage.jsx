import React from "react";

const LandingPage = () => {
    return <div className="">
        <div className=" flex flex-col">
          <div className="hero mt-12 ">
            <div className="mt-12 hero-content text-center">
              <div>
                <h1 className="text-6xl  text-black">
                  Contribute and earn
                </h1>
                <h1 className="text-3xl text-black mt-2">
                  by finding and contributing to open source projects
                </h1>
  
                <a
                  href="/createProject"
                  className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto"
                >
                  <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
                  <span className="relative text-lg text-black">
                    Create a project
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 mb-72">
          <div className="mb-24 ">
            <h1 className="text-2xl text-black ml-8">Featured Projects</h1>
          </div>
        </div>
        <footer className="bg-[#f2dbd0]">
          <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <h1 className="text-2xl text-black">Made with ❤️ by NatX</h1>
          </div>
        </footer>
      </div>;
  }


export default LandingPage;
