function FileExplorer({ files, activeFileId, onSelectFile }) {
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
      <h4 style={{ marginBottom: "10px" }}>Files</h4>

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
