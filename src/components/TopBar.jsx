import { theme } from "../theme";

function TopBar({ onRun, isRunning }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "32px",
        padding: `0 ${theme.spacing.md}`,
        backgroundColor: theme.colors.bgMain,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <div
        onClick={!isRunning ? onRun : undefined}
        style={{
          fontSize: theme.fontSize.small,
          color: isRunning
            ? theme.colors.textMuted
            : theme.colors.accent,
          cursor: isRunning ? "default" : "pointer",
          userSelect: "none",
        }}
      >
        {isRunning ? "Running…" : "Run"}
      </div>
    </div>
  );
}

export default TopBar;
