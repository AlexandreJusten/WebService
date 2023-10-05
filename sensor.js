const axios = require('axios');

function generateRandomData() {
  return {
    temperatura: Math.random() * 100,
    umidade: Math.random() * 100,
    luminosidade: Math.random() * 100,
  };
}

function sendDataToWebService() {
  setInterval(async () => {
    const data = generateRandomData();
    try {
      await axios.post('http://localhost:3000/data', data);
      console.log('Dados enviados com sucesso:', data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error.message);
    }
  }, 10000);
}

sendDataToWebService();
