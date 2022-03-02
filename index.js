 const express = require('express');

const app = express();

app.get('/', (req, res) => {
        res.send('Hello World!');
    });

const port = 3001;
const server = app.listen(port, () => {
        console.log('listening on port %s.\n', server.address().port);
    });

module.exports = app;
