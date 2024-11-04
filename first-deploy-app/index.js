const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
{
    res.send("Hi there i got the first request at / route");
});

app.get('/about', (req, res) =>
{
    res.send("Hi there this is about page response from backend");
});

app.listen(PORT, () =>
{
    console.log(`Server is started at port http://localhost:${PORT}`);
});