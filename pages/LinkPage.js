import Head from "next/head";
import Image from "next/image";
import Link from "../components/link";

const Home = () => {
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
                ENS Name
            </h1>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center">
    <Link />
  </div>
    </div>
  );
};

export default Home;