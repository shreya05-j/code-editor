import { theme } from "../theme";

function TopBar({ onRun, isRunning }) {
  return (
    <div
      style={{
        height: "32px",
        display: "flex",
        alignItems: "center",
        padding: `0 ${theme.spacing.md}`,
        backgroundColor: theme.colors.bgMain,
        borderBottom: `1px solid ${theme.colors.border}`,
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      <span
        onClick={!isRunning ? onRun : undefined}
        style={{
          fontSize: theme.fontSize.small,
          color: isRunning
            ? theme.colors.textMuted
            : theme.colors.accent,
          cursor: isRunning ? "default" : "pointer",
          lineHeight: "32px",
        }}
      >
        {isRunning ? "Running…" : "Run"}
      </span>
    </div>
  );
}

export default TopBar;
