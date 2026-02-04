import { theme } from "../theme";

function Tabs({ files, activeFileId, onSelectFile }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: theme.colors.bgPanel,
        borderBottom: `1px solid ${theme.colors.border}`,
        fontSize: theme.fontSize.small,
        flexShrink: 0,
      }}
    >
      {files.map((file) => {
        const isActive = file.id === activeFileId;

        return (
          <div
            key={file.id}
            onClick={() => onSelectFile(file.id)}
            style={{
              padding: `${theme.spacing.sm} ${theme.spacing.md}`,
              cursor: "pointer",

              backgroundColor: isActive
                ? theme.colors.bgMain
                : theme.colors.bgPanel,

              color: isActive
                ? theme.colors.textPrimary
                : theme.colors.textMuted,

              borderBottom: isActive
                ? `2px solid ${theme.colors.accent}`
                : "2px solid transparent",

              transition:
                "background-color 0.12s ease, color 0.12s ease",

              userSelect: "none",
            }}
          >
            {file.name}
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
