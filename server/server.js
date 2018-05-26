require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// always gives me problems linking css because server.js is not in root dir
app.use(express.static(path.join(__dirname, '../public')));


app.get('/api/events', (req, res) => {
    const event = [
        {
            id: 1,
            function: 'party',
            location: 'Jays Pub'
        },
        {
            id: 2,
            function: 'wedding',
            location: 'Rivieras on Hudson'
        },
        {
            id: 3,
            function: 'art gala',
            location: 'moma'
        }
    ]
    res.send(event);
})


app.listen(process.env.PORT, () =>
    console.log(
        `express server running on port: ${process.env.PORT}`
    )
);

module.exports = { app }