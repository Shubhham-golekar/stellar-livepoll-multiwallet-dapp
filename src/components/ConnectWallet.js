export default function ConnectWallet({ address, onConnect }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}>
      {!address ? (
        <button onClick={onConnect}>
          Connect Wallet
        </button>
      ) : (
        <div>
          🟢 {address.substring(0, 4)}...
          {address.substring(address.length - 4)}
        </div>
      )}
    </div>
  );
}