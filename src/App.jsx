import { useState } from "react";
import { runJavaScript } from "./utils/runCode";

import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import Tabs from "./components/Tabs";
import TopBar from "./components/TopBar";
import OutputPanel from "./components/OutputPanel";

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
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const activeFile = files.find(
    (file) => file.id === activeFileId
  );

  const updateFileContent = (newContent) => {
    setFiles((prev) =>
      prev.map((file) =>
        file.id === activeFileId
          ? { ...file, content: newContent }
          : file
      )
    );
  };

  const addNewFile = () => {
    const newId = Date.now().toString();

    setFiles((prev) => [
      ...prev,
      {
        id: newId,
        name: `file${prev.length + 1}.js`,
        language: "javascript",
        content: "// New file\n",
      },
    ]);

    setActiveFileId(newId);
  };

  const handleRun = () => {
    if (!activeFile) return;

    setIsRunning(true);
    setOutput("Running...");

    setTimeout(() => {
      const startTime = new Date().toLocaleTimeString();
      const result = runJavaScript(activeFile.content);

      setOutput(`[${startTime}]\n${result || "No output"}`);
      setIsRunning(false);
    }, 0);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1e1e1e",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          height: "100%",
          backgroundColor: "#252526",
          flexShrink: 0,
          borderRight: "1px solid #333",
        }}
      >
        <FileExplorer
          files={files}
          activeFileId={activeFileId}
          onSelectFile={setActiveFileId}
          onAddFile={addNewFile}
        />
      </div>

      {/* Main editor area */}
      <div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1e1e1e",
          overflow: "hidden",
        }}
      >
        <TopBar onRun={handleRun} isRunning={isRunning} />

        <Tabs
          files={files}
          activeFileId={activeFileId}
          onSelectFile={setActiveFileId}
        />

        <div style={{ flex: 1, overflow: "hidden" }}>
          <CodeEditor
            code={activeFile?.content || ""}
            onChange={updateFileContent}
          />
        </div>

        <OutputPanel output={output} />
      </div>
    </div>
  );
}

export default App;
