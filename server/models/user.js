const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String
	},
	isLoggedIn: {
		type: Boolean,
		default: true
	},
	tokens: [
		{
			access: {
				type: String,
				required: true
			},
			token: {
				type: String,
				required: true
			}
		}
	],
	events: [
		{
			name: {
				type: String
			},
			image: {
				type: String
			},
			rating: {
				type: Number
			},
			createdAt: {
				type: Date,
				default: Date.now
			}
		}
	],
	settings: {
		avatar: {
			type: String,
			default: '/22acd1da9b455b7ce7196bb89f01127a.jpg'
		},
		avatarSelect: {
			type: String,
			default: 'default-avatar'
		},
		company: {
			type: String
		},
		description: {
			type: String
		},
		location: {
			type: String
		}
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

// Presave Method

UserSchema.pre('save', function(next) {
	if (this.isModified('password')) {
		bcrypt.genSalt(10, (err, salt) => {
			if (err) {
				return;
			} else {
				bcrypt.hash(this.password, salt, (err, hash) => {
					if (err) {
						return;
					} else {
						this.password = hash;
						next();
					}
				});
			}
		});
	} else {
		next();
	}
});

// METHODS

UserSchema.methods = {
	generateAuthToken: function() {
		const access = 'auth';
		const token = jwt
			.sign(
				{
					_id: this._id.toHexString(),
					access
				},
				process.env.JWT_SECRET,
				{ expiresIn: '1d' }
			)
			.toString();
		this.tokens = [];
		this.tokens = this.tokens.concat({
			token,
			access
		});

		return this.save().then(() => token);
	},

	removeToken: function(token) {
		return this.updateOne({
			$pull: {
				tokens: {
					token
				}
			}
		});
	}
};

// STATICS

UserSchema.statics = {
	findByCredentials: (username, password) => {
		return User.findOne({ username }).then(user => {
			if (!user) {
				let error = 'Sorry that user was not found';
				return Promise.reject({
					error
				});
			}
			return new Promise((resolve, reject) => {
				bcrypt.compare(password, user.password, (err, res) => {
					if (res) {
						resolve(user);
					} else {
						let error = 'Incorrect Password';
						reject({
							error
						});
					}
				});
			});
		});
	},

	findByToken: token => {
		let decoded;

		try {
			decoded = jwt.verify(token, process.env.JWT_SECRET);
		} catch (e) {
			return Promise.reject();
		}

		const auth = 'auth';

		return User.findOne({
			_id: decoded._id,
			'tokens.token': token,
			'tokens.access': auth
		});
	}
};

const User = mongoose.model('users', UserSchema);

module.exports = User;
