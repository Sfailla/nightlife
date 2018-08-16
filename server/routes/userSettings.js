const express = require('express');
const { mongoose } = require('../db/mongoose');
const { ObjectId } = require('mongoose').Types;

const Settings = require('../models/userSettings');
const authenticate = require('../middleware/authenticate');

const server = express.Router();

server.get('/avatar', authenticate, (req, res) => {
	Settings.find({ user: req.user.id }).then(user => {
		res.send(user);
	});
});

server.post('/avatar', authenticate, (req, res) => {
	const { avatar, avatarSelect } = req.body;

	let settings = new Settings();
	settings.user = req.user.id;
	settings.avatar = avatar || '/22acd1da9b455b7ce7196bb89f01127a.jpg';
	settings.avatarSelect = avatarSelect || 'default-avatar';
	settings.save().then(user => {
		res.send(user);
	});
});

server.patch('/avatar', authenticate, (req, res) => {
	const { avatar, avatarSelect } = req.body;

	Settings.findOneAndUpdate(
		{ user: req.user.id },
		{ $set: { avatar, avatarSelect } },
		{ new: true }
	).then(doc => {
		if (!doc) {
			return res.status(404).send();
		} else {
			res.send(doc);
		}
	});
});

module.exports = server;
