const express = require('express');
const mongoose = require('../db/mongoose');

const User = require('../models/user');
const authenticate = require('../middleware/authenticate');

const server = express.Router();

// USER Routes for signing up and signing in
server.get('/me', authenticate, (req, res) => {
	let user = req.user;
	res.send(user);
});

server.get('/usersList', (req, res) => {
	User.find({}, (err, users) => {
		if (err) return res.send(err);
		res.send(users);
	});
});

server.delete('/users-list', authenticate, (req, res) => {
	let id = req.user.id;

	User.findByIdAndDelete(id, (err, user) => {
		if (err) return res.status().send(err);
		return res.status(200).send(user);
	});
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
	users.events = [];
	users.isLoggedIn = true;
	users
		.save()
		.then(user => {
			if (user) {
				user
					.generateAuthToken()
					.then(token =>
						res.header('x-auth', token).status(200).send(user)
					);
			} else {
				res.status(400).send({
					error: 'there was a problem with sign up.'
				});
			}
		})
		.catch(err => res.status(400).send(err));
});

server.post('/sign-in', (req, res) => {
	const { username, password } = req.body;

	User.findByCredentials(username, password)
		.then(user => {
			if (user) {
				return user
					.generateAuthToken()
					.then(token =>
						res.header('x-auth', token).status(200).send(user)
					);
			}
		})
		.catch(err => {
			return res.status(400).send(err);
		});
});

server.delete('/token', authenticate, (req, res) => {
	req.user
		.removeToken(req.token)
		.then(() => res.status(200).send())
		.catch(err => res.status(400).send(err));
});

server.patch('/presence', authenticate, (req, res) => {
	const { isLoggedIn } = req.body;

	User.findOneAndUpdate(
		{ _id: req.user.id },
		{
			$set: {
				isLoggedIn
			}
		}
	)
		.then(doc => {
			res.status(200).send(doc);
		})
		.catch(err => res.send(err));
});

// User Routes for USER SETTINGS ex. AVATAR, BIO
server.get('/settings', authenticate, (req, res) => {
	User.findOne({
		_id: req.user.id
	}).then(user => {
		res.send(user);
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
	)
		.then(doc => {
			if (doc) {
				res.send(doc);
			}
		})
		.catch(err => {
			return res.status(404).send(err);
		});
});

// User Routes for Events
server.get('/events', authenticate, (req, res) => {
	return User.findOne({ _id: req.user.id }, (err, user) => {
		if (err) {
			return res.status(400).send(err);
		} else {
			res.send(user);
		}
	});
});

server.post('/events', authenticate, (req, res) => {
	const { name, image, rating } = req.body;
	let event = {
		name,
		rating,
		image
	};

	User.findOneAndUpdate(
		{ _id: req.user.id },
		{
			$push: {
				events: event
			}
		}
	)
		.then(event => {
			res.send(event);
		})
		.catch(err => res.status(400).send(err));
});

server.delete('/events/:id', authenticate, (req, res) => {
	const _id = req.params.id;
	const uid = req.user.id;

	User.findOneAndUpdate(
		{ _id: uid },
		{
			$pull: {
				events: { _id }
			}
		}
	)
		.then(event => {
			res.send(event);
		})
		.catch(err => {
			res.status(400).send(err);
		});
});

module.exports = server;
