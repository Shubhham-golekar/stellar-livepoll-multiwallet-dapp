import { useState, useContext } from "react";
import { WalletContext } from "../context/WalletContext";

function VoteTab({ pollState, setPollState }) {
  const { address } = useContext(WalletContext);
  const [selected, setSelected] = useState(null);

  const castVote = () => {
    if (!address) {
      alert("Connect wallet first");
      return;
    }

    if (selected === null) return;

    const newVotes = [...pollState.votes];
    newVotes[selected]++;

    setPollState({
      ...pollState,
      votes: newVotes,
      totalVotes: pollState.totalVotes + 1,
    });

    setSelected(null);
  };

  return (
    <div className="card">
      <h3>{pollState.question}</h3>

      {pollState.options.map((opt, i) => (
        <div key={i}>
          <input
            type="radio"
            name="vote"
            checked={selected === i}
            onChange={() => setSelected(i)}
          />
          {opt} — {pollState.votes[i]} votes
        </div>
      ))}

      <button onClick={castVote}>Cast Vote</button>
    </div>
  );
}

export default VoteTab;