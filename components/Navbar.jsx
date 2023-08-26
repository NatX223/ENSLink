import Image from "next/image";
import { useAccount, useConnect, useEnsName, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import toast from "react-hot-toast";

const Navbar = () => {
  const { data, isError, isLoading } = useEnsName({
    address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  })
  const { address, isConnected } = useAccount();

  const { disconnect } = useDisconnect({
    onSuccess() {
      toast("Account disconnected!", {
        style: {
          border: "2px solid #000",
        },
      });
    },
    onError() {
      toast.error("Failed to disconnect account!", {
        style: {
          border: "2px solid #000",
        },
      });
    },
  });
  const { connect } = useConnect({
    chainId: 5,
    connector: new InjectedConnector(),
    onSuccess() {
      toast.success("Account connected!", {
        style: {
          border: "2px solid #000",
        },
      });
    },
    onError() {
      toast.error("Error connecting account!", {
        style: {
          border: "2px solid #000",
        },
      });
    },
  });

  return (
    <div id="navbar" className="navbar sticky top-0 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-8 mr-8 text-lg">
        </div>
        <button
          onClick={() => {
            if (isConnected) {
              disconnect();
            } else {
              connect();
            }
          }}
          className="relative inline-block px-4 py-2 font-medium group "
        >
          <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
          {address ? (
            <span className="relative text-black">
              {address.slice(0, 6) + "..." + address.slice(-4)}
            </span>
          ) : (
            <span className="relative text-black">Connect Wallet</span>
          )}
        </button>
        <p>
          Name: {data}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
