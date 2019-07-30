require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const users = require('./routes/users');
const publicPath = path.join(__dirname, '..', 'public');

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`express server running on port: ${port}`));

module.exports = { app };
