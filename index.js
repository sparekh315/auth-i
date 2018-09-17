const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

const db = require('./db/dbConfig.js');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
  res.send('Hello!');
});

//endpoints
server.post('/api/register', (req, res) => {
  const cred = req.body;
  const hash = bcrypt.hashSync(creds.password, 16);
  
})


const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});