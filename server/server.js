// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());             // nur noetig, wenn du OHNE Proxy arbeitest
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

app.listen(3000, () => console.log('API listening on http://localhost:3000'));
