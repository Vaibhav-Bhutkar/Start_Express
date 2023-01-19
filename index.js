const express = require('express');
const app = express();
const port = 4000;

app.listen(port, (error) => {
    if (!error) {
        console.log("Listening on port 4000")
    }
})

app.get('/', (req, res) => {
    res.send("Welcome to ELEVATE 2023")
})