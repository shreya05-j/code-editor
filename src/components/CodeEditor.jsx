import Editor from "@monaco-editor/react";

function CodeEditor({ code, onChange }) {
  return (
    <Editor
      height="100%"
      language="javascript"
      value={code}
      theme="vs-dark"
      onChange={onChange}
    />
  );
}

export default CodeEditor;
