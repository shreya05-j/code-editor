function TopBar({ onRun, isRunning }) {

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "6px 10px",
        backgroundColor: "#1e1e1e",
        borderBottom: "1px solid #333",
      }}
    >
      <button
  onClick={onRun}
  disabled={isRunning}
  style={{
    backgroundColor: isRunning ? "#555" : "#0e639c",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    cursor: isRunning ? "not-allowed" : "pointer",
    borderRadius: "3px",
  }}
>
  {isRunning ? "Running..." : "Run"}
</button>

    </div>
  );
}

export default TopBar;
