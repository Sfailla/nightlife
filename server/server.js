require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

const users = require('./routes/users');
// const events = require('./routes/users');

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
// app.use('/events', events);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'), err => {
		if (err) res.status(500).send(err);
	});
});

app.listen(process.env.PORT, () =>
	console.log(`express server running on port: ${process.env.PORT}`)
);

module.exports = { app };
