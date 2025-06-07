const { exec } = require("child_process");

exec("npx next start", (err, stdout, stderr) => {
  if (err) {
    console.error(`Error starting Next.js: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(`stdout: ${stdout}`);
});
