import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import ConnectWallet from "./ConnectWallet";

function Header() {
  const { address, connectWallet } = useContext(WalletContext);

  return (
    <div>
      <ConnectWallet address={address} onConnect={connectWallet} />
    </div>
  );
}

export default Header;