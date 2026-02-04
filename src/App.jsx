import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import FileExplorer from "./components/FileExplorer";

const initialFiles = [
  {
    id: "1",
    name: "index.js",
    language: "javascript",
    content: "// index.js\nconsole.log('Hello from index.js');",
  },
  {
    id: "2",
    name: "app.js",
    language: "javascript",
    content: "// app.js\nconsole.log('Hello from app.js');",
  },
];

function App() {
  const [files, setFiles] = useState(initialFiles);
  const [activeFileId, setActiveFileId] = useState("1");

  const activeFile = files.find(
    (file) => file.id === activeFileId
  );

  const updateFileContent = (newContent) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === activeFileId
          ? { ...file, content: newContent }
          : file
      )
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <FileExplorer
        files={files}
        activeFileId={activeFileId}
        onSelectFile={setActiveFileId}
      />

      <div style={{ flex: 1 }}>
        <CodeEditor
          code={activeFile.content}
          onChange={updateFileContent}
        />
      </div>
    </div>
  );
}

export default App;
