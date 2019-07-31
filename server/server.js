if (process.env.NODE_ENV === 'development') {
	require('./config/config');
}

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const users = require('./routes/users');

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/users', users);

app.use('../build', express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`express server running on port: ${port}`));

module.exports = { app };
