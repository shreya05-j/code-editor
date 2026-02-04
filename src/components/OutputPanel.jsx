import { useEffect, useRef } from "react";

function OutputPanel({ output }) {
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop =
        outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div
      ref={outputRef}
      style={{
        height: "150px",
        backgroundColor: "#111",
        color: "#d4d4d4",
        padding: "10px",
        borderTop: "1px solid #333",
        fontFamily: "monospace",
        overflowY: "auto",
      }}
    >
      <div style={{ color: "#6a9955", marginBottom: "6px" }}>
        Output
      </div>

      {output ? (
        <pre style={{ margin: 0 }}>{output}</pre>
      ) : (
        <div style={{ color: "#777" }}>No output yet</div>
      )}
    </div>
  );
}

export default OutputPanel;
