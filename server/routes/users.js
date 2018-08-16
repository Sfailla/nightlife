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
	users.avatar = null;

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

module.exports = server;
