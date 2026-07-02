const pty = require('node-pty');
const fs = require('fs');
const os = require('os');

const ptyProcess = pty.spawn('npx.cmd', ['eas-cli', 'credentials', '-p', 'android'], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.cwd(),
  env: process.env
});

let output = '';

ptyProcess.onData((data) => {
  output += data;
  process.stdout.write(data);
  
  if (data.includes('Select project')) {
    // If it asks to select project, just press enter
    ptyProcess.write('\r');
  }
  
  if (data.includes('What do you want to do?')) {
    // We want: "Keystore: Manage everything needed to build your project" -> which is the first option usually, or we can send down arrows.
    // Actually, "Keystore" is usually the second option after "Build Credentials".
    // Let's just wait and see what options are printed before sending arrows.
  }
});

setTimeout(() => {
  console.log('\n\n--- OUTPUT ---\n' + output);
  ptyProcess.kill();
}, 10000);
