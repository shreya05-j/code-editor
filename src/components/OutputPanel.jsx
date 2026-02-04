import { useEffect, useRef } from "react";
import { theme } from "../theme";

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
        width: "100%",
        height: "150px",
        boxSizing: "border-box",

        backgroundColor: theme.colors.bgMain,
        color: theme.colors.textPrimary,

        padding: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.border}`,

        fontFamily: "monospace",
        fontSize: theme.fontSize.small,

        overflowY: "auto",
      }}
    >
      <div
        style={{
          color: theme.colors.textMuted,
          marginBottom: theme.spacing.xs,
          userSelect: "none",
        }}
      >
        Output
      </div>

      {output ? (
        <pre
          style={{
            margin: 0,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {output}
        </pre>
      ) : (
        <div style={{ color: theme.colors.textMuted }}>
          No output yet
        </div>
      )}
    </div>
  );
}

export default OutputPanel;
