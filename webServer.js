const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const dataStore = [];

app.use(bodyParser.json());

app.post('/data', (req, res) => {
  const newData = req.body;
  newData.id = dataStore.length + 1;
  newData.dataHora = new Date();
  dataStore.push(newData);
  res.json(newData);
});

app.get('/data', (req, res) => {
  res.json(dataStore);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
