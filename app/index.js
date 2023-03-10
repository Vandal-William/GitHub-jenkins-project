require('dotenv').config();

const express = require('express');
const path = require('path');
const myPassword = process.env.ANSIBLE_SSH_PASS;

const PORT = process.env.PORT || 4100;
const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
   
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
})
