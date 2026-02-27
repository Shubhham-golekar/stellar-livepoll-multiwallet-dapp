import { useState } from "react";

function CreateTab({ setPollState }) {
  const [question, setQuestion] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const create = () => {
    if (!question || !a || !b) {
      alert("Fill all fields");
      return;
    }

    setPollState({
      question,
      options: [a, b],
      votes: [0, 0],
      totalVotes: 0,
      isActive: true,
    });

    setQuestion("");
    setA("");
    setB("");
  };

  return (
    <div className="card">
      <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
      <input value={a} onChange={(e) => setA(e.target.value)} placeholder="Option A" />
      <input value={b} onChange={(e) => setB(e.target.value)} placeholder="Option B" />
      <button onClick={create}>Create Poll</button>
    </div>
  );
}

export default CreateTab;