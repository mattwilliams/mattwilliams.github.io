const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../')));

app.get('/demo', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../blog.html'));
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});