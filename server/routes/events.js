const express = require('express');
const User = require('../models/user');
const authenticate = require('../middleware/authenticate');

const server = express.Router();

// User Routes For Events
server.patch('/', authenticate, (req, res) => {
	console.log(req.body);
	// const event = {
	// 	'events.name': req.body.name,
	// 	'events.image': req.body.image,
	// 	'events.rating': req.user.rating
	// };

	// event
	// 	.save()
	// 	.then(doc => res.send(doc))
	// 	.catch(err => res.status(400).send(err));
});

server.get('/allEvents', (req, res) => {
	Events.find({}).then(event => res.send(event));
});

server.get('/', authenticate, (req, res) => {
	Events.find({ creator: req.user._id }).then(event => res.send(event));
});

server.delete('/:id', (req, res) => {
	const id = req.params.id;

	Events.findByIdAndRemove(id).then(event => res.send(event));
});

module.exports = server;
