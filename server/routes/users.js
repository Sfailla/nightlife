const express = require('express');

const User = require('../models/user');
const mongoose = require('../db/mongoose');

const authenticate = require('../middleware/authenticate');

const server = express.Router();

// USER Routes for signing up and signing in

server.get('/me', authenticate, (req, res) => {
	res.send(req.user);
});

server.post('/sign-up', (req, res) => {
	const { username, password } = req.body;

	const users = new User();
	users.username = username;
	users.password = password;
	users.location = null;
	users.description = null;
	users.email = null;
	users.settings.avatar = null;
	users.settings.avatarSelect = null;

	users
		.save()
		.then(user => {
			user
				.generateAuthToken()
				.then(token =>
					res.header('x-auth', token).status(200).send(user)
				);
		})
		.catch(err => res.status(400).send(err));
});

server.post('/sign-in', (req, res) => {
	const { username, password } = req.body;

	User.findByCredentials(username, password)
		.then(user => {
			return user
				.generateAuthToken()
				.then(token =>
					res.header('x-auth', token).status(200).send(user)
				);
		})
		.catch(err => res.status(400).send(err));
});

server.delete('/token', authenticate, (req, res) => {
	req.user.removeToken(req.token).then(
		() => {
			return res.status(200).send();
		},
		() => {
			return res.status(400).send();
		}
	);
});

server.get('/settings/avatar', authenticate, (req, res) => {
	User.find({ _id: req.user.id }).then(user => {
		res.send(user);
	});
});

server.patch('/settings/initialize-avatar', authenticate, (req, res) => {
	const avatar = '/22acd1da9b455b7ce7196bb89f01127a.jpg';
	const avatarSelect = 'default-avatar';
	const creator = req.user.id;

	User.findOneAndUpdate(
		{ _id: req.user.id },
		{ $set: { avatar, avatarSelect, creator } },
		{ new: true }
	).then(user => {
		console.log(user);
		if (!user) {
			return res.status(404).send();
		} else {
			res.send(user);
		}
	});
});

server.patch('/settings/avatar', authenticate, (req, res) => {
	const { avatar, avatarSelect } = req.body;

	User.findOneAndUpdate(
		{ creator: req.user.id },
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
