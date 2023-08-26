import '@/styles/globals.css'
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import { BrowserRouter } from 'react-router-dom';

function App({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      <BrowserRouter>
        <div className="bg-gradient-to-r from-[#fdeab1] to-white h-screen">
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