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
	users.email = null;
	users.settings.location = null;
	users.settings.description = null;
	users.settings.company = null;
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

server.patch('/events', authenticate, (req, res) => {
	const events = req.body.events;
	console.log('events', events);
	User.findOneAndUpdate(
		{ _id: req.user.id },
		{
			$push: {
				'events.name': events
			}
		},
		{ new: true }
	)
		.then(event => {
			if (!event) {
				return res.status(404).send();
			} else {
				res.send(event);
			}
		})
		.catch(err => res.status(404).send(err));
});

// User Routes for USER SETTINGS ex. AVATAR, BIO

server.get('/settings', authenticate, (req, res) => {
	User.find({ _id: req.user.id }).then(user => {
		res.send(user);
	});
});

server.patch('/settings/initialize', authenticate, (req, res) => {
	User.findOneAndUpdate(
		{ _id: req.user.id },
		{
			$set: {
				'utilities.initialRender': false
			}
		},
		{ new: true }
	).then(user => {
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
		{ _id: req.user.id },
		{
			$set: {
				'settings.avatar': avatar,
				'settings.avatarSelect': avatarSelect
			}
		},
		{ new: true }
	).then(doc => {
		if (!doc) {
			return res.status(404).send();
		} else {
			res.send(doc);
		}
	});
});

server.patch('/settings/biography', authenticate, (req, res) => {
	console.log(req.body.company);
	const { company, email, location, description } = req.body;

	User.findOneAndUpdate(
		{ _id: req.user.id },
		{
			$set: {
				email,
				'settings.company': company,
				'settings.location': location,
				'settings.description': description
			}
		},
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
