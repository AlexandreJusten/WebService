const { spawn } = require('child_process');

const webServiceProcess = spawn('node', ['webServer.js']);

webServiceProcess.stdout.on('data', (data) => {
  console.log(`Web Service: ${data}`);
});

webServiceProcess.stderr.on('data', (data) => {
  console.error(`Erro no Web Service: ${data}`);
});

const client1Process = spawn('node', ['sensor.js']);

client1Process.stdout.on('data', (data) => {
  console.log(`Cliente 1: ${data}`);
});

client1Process.stderr.on('data', (data) => {
  console.error(`Erro no Cliente 1: ${data}`);
});

const client2Process = spawn('node', ['consumidor.js']);

client2Process.stdout.on('data', (data) => {
  console.log(`Cliente 2: ${data}`);
});

client2Process.stderr.on('data', (data) => {
  console.error(`Erro no Cliente 2: ${data}`);
});
