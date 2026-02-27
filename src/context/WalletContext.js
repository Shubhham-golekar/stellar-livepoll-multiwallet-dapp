import { createContext, useState } from "react";
import { requestAccess, getAddress } from "@stellar/freighter-api";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    try {
      // This opens Freighter popup
      await requestAccess();

      // Get public key
      const { address } = await getAddress();
      setAddress(address);

      console.log("Connected:", address);

    } catch (error) {
      console.error("Freighter error:", error);
      alert("Connection rejected or Freighter blocked");
    }
  };

  return (
    <WalletContext.Provider value={{ address, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};