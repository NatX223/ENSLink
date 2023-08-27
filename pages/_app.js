import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LinkTree from './LinkPage';
import '@/styles/globals.css'
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

function App({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      <BrowserRouter>
        <div className="bg-gradient-to-r from-[#c28eed] to-white h-screen">
          <Component {...pageProps} />
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
    )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});