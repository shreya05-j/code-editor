function TopBar({ onRun }) {
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
        style={{
          backgroundColor: "#0e639c",
          color: "#fff",
          border: "none",
          padding: "6px 12px",
          cursor: "pointer",
          borderRadius: "3px",
        }}
      >
        Run
      </button>
    </div>
  );
}

export default TopBar;
