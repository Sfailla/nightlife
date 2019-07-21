require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const users = require('./routes/users');

const app = express();

app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// always gives me problems linking css because server.js is not in root dir
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/users', users);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'public')));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`express server running on port: ${port}`));

module.exports = { app };
