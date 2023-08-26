import '@/styles/globals.css'
import { Toaster } from "react-hot-toast";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import dynamic from "next/dynamic";
import { BrowserRouter } from 'react-router-dom';

const goerliTestNet = {
  id: 5,
  name: "Goerli test network",
  network: "Goerli test network",
  nativeCurrency: {
    decimals: 18,
    name: "Testnet ETH",
    symbol: "GoerliETH",
  },
  rpcUrls: {
    default: "https://eth-goerli.g.alchemy.com/v2/aDreg16x2qN4ncisNMITdVDGZ2Nzz4zB",
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://goerli.etherscan.io" },
  },
  testnet: true,
};
const { chains, provider, webSocketProvider } = configureChains(
  [goerliTestNet],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== goerliTestNet.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

let client;
if (typeof window !== "undefined") {
  client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });
}

function App({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      <BrowserRouter>
      {typeof window !== "undefined" && client && (
        <WagmiConfig client={client}>
        <div className="bg-gradient-to-r from-[#c28eed] to-white h-screen">
          <Component {...pageProps} />
          <Toaster />
        </div>
        </WagmiConfig>
      )}
      </BrowserRouter>
    </div>
    )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});