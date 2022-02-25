require('newrelic');
const express = require('express');
const app = express();

const port = 3000;

app.use((req, res, next) => {
    console.log(new Date(Date.now()).toUTCString() + ' - ' + req.method + " request to " + req.url);
    next();
});

app.get('/', (req,res) => {
    let response = {
        "message" : "OK",
        "code" : 0
    }
    res.setHeader('Content-Type','application/json');
    res.status(200).send(JSON.stringify(response));
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});