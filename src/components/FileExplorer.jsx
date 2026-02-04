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
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h4 style={{ margin: 0 }}>Files</h4>
        <button
          onClick={onAddFile}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          +
        </button>
      </div>

      {files.map((file) => (
        <div
          key={file.id}
          onClick={() => onSelectFile(file.id)}
          style={{
            padding: "6px 8px",
            cursor: "pointer",
            backgroundColor:
              file.id === activeFileId ? "#333" : "transparent",
          }}
        >
          {file.name}
        </div>
      ))}
    </div>
  );
}

export default FileExplorer;
