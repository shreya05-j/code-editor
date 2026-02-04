export function runJavaScript(code) {
  let output = [];
  let isFinished = false;

  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  const pushOutput = (type, args) => {
    output.push(`[${type}] ${args.join(" ")}`);
  };

  console.log = (...args) => pushOutput("log", args);
  console.warn = (...args) => pushOutput("warn", args);
  console.error = (...args) => pushOutput("error", args);

  try {
    if (code.includes("while(true)") || code.includes("for(;;)")) {
  return "[error] Possible infinite loop detected";
}

    const fn = new Function(`
  let __start = Date.now();
  while (true) {
    break;
  }
  ${code}
`);
fn();

    isFinished = true;
  } catch (err) {
    pushOutput("error", [err.message]);
  }

  console.log = originalLog;
  console.warn = originalWarn;
  console.error = originalError;

  if (!isFinished) {
    output.push("[error] Execution stopped");
  }

  return output.join("\n");
}
