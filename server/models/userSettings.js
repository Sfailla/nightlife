const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const UserSettingsModel = new mongoose.Schema({
	user: {
		type: ObjectId
	},
	avatar: {
		type: String
		// default: '/22acd1da9b455b7ce7196bb89f01127a.jpg'
	},
	avatarSelect: {
		type: String
		// default: 'default-avatar'
	},
	event: {
		type: String
	},
	location: {
		type: String
	},
	attendees: {
		type: String
	}
});

User = mongoose.model('Settings', UserSettingsModel);

module.exports = User;
