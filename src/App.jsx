import OutputPanel from "./components/OutputPanel";
import TopBar from "./components/TopBar";
import Tabs from "./components/Tabs";
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
  const [output, setOutput] = useState("");


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
const addNewFile = () => {
  const newId = Date.now().toString();

  const newFile = {
    id: newId,
    name: `file${files.length + 1}.js`,
    language: "javascript",
    content: "// New file\n",
  };

  setFiles((prev) => [...prev, newFile]);
  setActiveFileId(newId);
};
const handleRun = () => {
  setOutput("Running...");
};


  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <FileExplorer
  files={files}
  activeFileId={activeFileId}
  onSelectFile={setActiveFileId}
  onAddFile={addNewFile}
/>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
  <TopBar onRun={handleRun} />

  <Tabs
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

  <OutputPanel output={output} />
</div>



    </div>
  );
}

export default App;
