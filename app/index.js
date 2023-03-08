require('dotenv').config();

const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 6000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
   
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
})
