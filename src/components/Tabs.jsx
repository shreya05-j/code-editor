function Tabs({ files, activeFileId, onSelectFile }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#2d2d2d",
        color: "#fff",
      }}
    >
      {files.map((file) => (
        <div
          key={file.id}
          onClick={() => onSelectFile(file.id)}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            backgroundColor:
              file.id === activeFileId ? "#1e1e1e" : "transparent",
          }}
        >
          {file.name}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
