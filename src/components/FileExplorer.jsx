import { theme } from "../theme";

function FileExplorer({
  files,
  activeFileId,
  onSelectFile,
  onAddFile,
}) {
  return (
    <div
      style={{
        width: "220px",
        backgroundColor: theme.colors.bgPanel,
        color: theme.colors.textPrimary,
        padding: theme.spacing.md,
        borderRight: `1px solid ${theme.colors.border}`,
        boxSizing: "border-box",
        fontSize: theme.fontSize.small,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: theme.spacing.sm,
        }}
      >
        <span style={{ color: theme.colors.textMuted }}>
          Files
        </span>

        <button
          onClick={onAddFile}
          style={{
            background: "transparent",
            border: "none",
            color: theme.colors.textMuted,
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          +
        </button>
      </div>

      {files.map((file) => {
        const isActive = file.id === activeFileId;

        return (
          <div
  key={file.id}
  onClick={() => onSelectFile(file.id)}
  style={{
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    cursor: "pointer",
    backgroundColor: isActive
      ? theme.colors.bgActive
      : "transparent",
    color: isActive
      ? theme.colors.textPrimary
      : theme.colors.textMuted,
    borderLeft: isActive
      ? `2px solid ${theme.colors.accent}`
      : "2px solid transparent",
  }}
>
  {file.name}
</div>

        );
      })}
    </div>
  );
}

export default FileExplorer;
