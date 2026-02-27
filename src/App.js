import { useState } from "react";
import Header from "./components/Header";
import VoteTab from "./components/VoteTab";
import CreateTab from "./components/CreateTab";
import ResultsTab from "./components/ResultsTab";
import TxTab from "./components/TxTab";

function App() {
  const [activeTab, setActiveTab] = useState("vote");

  const [pollState, setPollState] = useState({
    question: "What is your preferred Stellar wallet?",
    options: ["Freighter", "Lobstr"],
    votes: [0, 0],
    totalVotes: 0,
    isActive: true,
  });

  return (
    <div className="wrapper">
      <Header />

      <div className="tabs">
        <button onClick={() => setActiveTab("vote")}>Vote</button>
        <button onClick={() => setActiveTab("create")}>Create</button>
        <button onClick={() => setActiveTab("results")}>Results</button>
        <button onClick={() => setActiveTab("tx")}>Transactions</button>
      </div>

      {activeTab === "vote" && (
        <VoteTab pollState={pollState} setPollState={setPollState} />
      )}
      {activeTab === "create" && (
        <CreateTab setPollState={setPollState} />
      )}
      {activeTab === "results" && <ResultsTab pollState={pollState} />}
      {activeTab === "tx" && <TxTab />}
    </div>
  );
}

export default App;