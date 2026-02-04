export function runJavaScript(code) {
  let output = [];

  const originalLog = console.log;
  const originalError = console.error;

  console.log = (...args) => {
    output.push(args.join(" "));
  };

  console.error = (...args) => {
    output.push("Error: " + args.join(" "));
  };

  try {
    new Function(code)();
  } catch (err) {
    output.push("Error: " + err.message);
  }

  console.log = originalLog;
  console.error = originalError;

  return output.join("\n");
}
