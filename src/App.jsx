import { useState, useEffect } from "react";
import { runJavaScript } from "./utils/runCode";

import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import Tabs from "./components/Tabs";
import TopBar from "./components/TopBar";
import OutputPanel from "./components/OutputPanel";

const defaultFiles = [
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
  /* ---------- STATE (RESTORED SAFELY) ---------- */

  const [files, setFiles] = useState(() => {
    const saved = localStorage.getItem("editorFiles");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch {}
    }
    return defaultFiles;
  });

  const [activeFileId, setActiveFileId] = useState(() => {
    return localStorage.getItem("activeFileId") || "1";
  });

  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const activeFile = files.find(
    (file) => file.id === activeFileId
  ) || files[0];

  /* ---------- AUTOSAVE (BULLETPROOF) ---------- */

  useEffect(() => {
    localStorage.setItem("editorFiles", JSON.stringify(files));
  }, [files]);

  useEffect(() => {
    if (activeFileId) {
      localStorage.setItem("activeFileId", activeFileId);
    }
  }, [activeFileId]);

  /* ---------- EDITOR LOGIC ---------- */

  const updateFileContent = (newContent) => {
    setFiles((prev) =>
      prev.map((file) =>
        file.id === activeFile.id
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
    if (!activeFile || isRunning) return;

    setIsRunning(true);
    setOutput("Running...");

    setTimeout(() => {
      const startTime = new Date().toLocaleTimeString();
      const result = runJavaScript(activeFile.content);

      setOutput(`[${startTime}]\n${result || "No output"}`);
      setIsRunning(false);
    }, 0);
  };

  /* ---------- KEYBOARD SHORTCUT ---------- */

  useEffect(() => {
    const handler = (e) => {
      const isMac = navigator.platform
        .toUpperCase()
        .includes("MAC");

      const runShortcut =
        (isMac && e.metaKey && e.key === "Enter") ||
        (!isMac && e.ctrlKey && e.key === "Enter");

      if (runShortcut) {
        e.preventDefault();
        handleRun();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleRun]);

  /* ---------- UI ---------- */

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
      <div
        style={{
          width: "220px",
          backgroundColor: "#252526",
          borderRight: "1px solid #333",
        }}
      >
        <FileExplorer
          files={files}
          activeFileId={activeFile.id}
          onSelectFile={setActiveFileId}
          onAddFile={addNewFile}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1e1e1e",
        }}
      >
        <TopBar onRun={handleRun} isRunning={isRunning} />

        <Tabs
          files={files}
          activeFileId={activeFile.id}
          onSelectFile={setActiveFileId}
        />

        <div style={{ flex: 1 }}>
          <CodeEditor
            code={activeFile.content}
            onChange={updateFileContent}
          />
        </div>

        <OutputPanel output={output} />
      </div>
    </div>
  );
}

export default App;
