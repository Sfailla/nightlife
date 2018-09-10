const express = require('express');
const Events = require('../models/event');
const authenticate = require('../middleware/authenticate');

const server = express.Router();

// create an event
server.post('/', authenticate, (req, res) => {
	const event = new Events({
		name: req.body.name,
		creator: req.user._id
	});
	event
		.save()
		.then(doc => res.send(doc))
		.catch(err => res.status(400).send(err));
});

server.get('/', authenticate, (req, res) => {
	Events.find({ creator: req.user._id }).then(event => res.send(event));
});

server.delete('/:id', (req, res) => {
	const id = req.params.id;

	Events.findByIdAndRemove(id).then(event => res.send(event));
});

module.exports = server;
