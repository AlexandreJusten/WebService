const http = require('http');
const fs = require('fs');
const axios = require('axios');

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        try {
            const response = await axios.get('http://localhost:3000/data');
            const data = response.data;

            const html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="refresh" content="8">
                <title>Dados do Web Service</title>
            </head>
                <body>
                    <h1>Dados do Web Service</h1>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                            <th>Luminosidade</th>
                            <th>Data e Hora</th>
                        </tr>
                        ${data.map(item => `
                            <tr>
                                <td>${item.id}</td>
                                <td>${item.temperatura}</td>
                                <td>${item.umidade}</td>
                                <td>${item.luminosidade}</td>
                                <td>${new Date(item.dataHora).toLocaleString()}</td>
                            </tr>
                        `).join('')}
                    </table>
                </body>
                </html>
            `;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        } catch (error) {
            console.error('Erro ao obter os dados:', error.message);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erro interno do servidor');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

const port = 8000;
server.listen(port, () => {
    console.log(`Servidor web rodando em http://localhost:${port}`);
});
