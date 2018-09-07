const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const EventSchema = new mongoose.Schema({
	creator: {
		type: ObjectId,
		required: true
	},
	name: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Events = mongoose.model('events', EventSchema);

module.exports = Events;
