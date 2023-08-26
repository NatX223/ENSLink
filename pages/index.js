import Head from "next/head";
import Image from "next/image";
import LandingPage from "../components/LandingPage";

const Home = () => {
  // call function here
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </div>
  );
};

export default Home;
