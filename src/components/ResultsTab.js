function ResultsTab({ pollState }) {
  return (
    <div className="card">
      <h3>Results</h3>
      {pollState.options.map((opt, i) => {
        const percent =
          pollState.totalVotes > 0
            ? ((pollState.votes[i] / pollState.totalVotes) * 100).toFixed(1)
            : 0;

        return (
          <div key={i}>
            {opt} — {percent}%
          </div>
        );
      })}
    </div>
  );
}

export default ResultsTab;