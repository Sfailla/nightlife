const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const users = require('./routes/users');
// const dotenv = require('dotenv').config();

const app = express();

console.log(process.env.TEST);
console.log('hello');

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`express server running on port: ${port}`));

module.exports = { app };
