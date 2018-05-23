require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('../public', express.static('public'))

// testing purpose
// app.get('/*', (req, res) => {
//     res.sendFile('index.html', { root: path.join(__dirname, '../public') });
// });

app.get('/home', (req, res) => {
    res.send('hello world');
})


app.listen(process.env.PORT, () =>
    console.log(
        `express server running on port: ${process.env.PORT}`
    )
);

module.exports = { app }