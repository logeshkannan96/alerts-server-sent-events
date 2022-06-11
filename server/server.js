const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

function eventsHandler(request, response, next) {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  response.writeHead(200, headers);

  const data = `data: ${JSON.stringify(messages)}\n\n`;

  response.write(data);

  const clientId = Date.now();

  const newClient = {
    id: clientId,
    response
  };

  clients.push(newClient);

  request.on('close', () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter(client => client.id !== clientId);
  });
}

app.get('/messages', eventsHandler);

function sendEventsToAll(newMessage) {
  clients.forEach(client => client.response.write(`data: ${JSON.stringify(newMessage)}\n\n`))
}

async function pushMessage(request, respsonse, next) {
  const newMessage = request.body;
  messages.push(newMessage);
  respsonse.json(newMessage)
  return sendEventsToAll(newMessage);
}

app.post('/pushMessage', pushMessage);

app.get('/status', (request, response) => response.json({clients: clients.length}));

const PORT = 3001;

let clients = [];
let messages = [];

app.listen(PORT, () => {
  console.log(`Messages Events service listening at http://localhost:${PORT}`)
})