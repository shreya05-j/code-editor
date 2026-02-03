import { useState } from "react";
import CodeEditor from "./components/CodeEditor";

function App() {
  const [code, setCode] = useState(
    "// Start typing JavaScript\nconsole.log('Hello, Editor');"
  );

  return (
    <div style={{ height: "100vh" }}>
      <CodeEditor code={code} onChange={setCode} />
    </div>
  );
}

export default App;
