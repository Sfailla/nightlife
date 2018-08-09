require('../../db/mongoose');
const jwt = require('jsonwebtoken');

const { ObjectID } = require('mongodb');
const User = require('../../models/user');

console.log(new ObjectID());

let userOneID = new ObjectID();
let users = [
	{
		username: 'Stevo99Lite',
		password: '1234',
		tokens: [
			{
				access: 'auth',
				token: jwt.sign({ _id: userOneID, access: 'auth' }, 'abc123').toString()
			}
		]
	},
	{
		username: 'Plane Jane',
		password: 'gohome',
		tokens: []
	}
];

const populateUsers = (done) => {
	User.remove({})
		.then(() => {
			const userOne = new User(users[0]).save();
			const userTwo = new User(users[1]).save();
			Promise.all([ userOne, userTwo ]).then(() => done()).catch((err) => console.log(err));
		})
		.catch((err) => {
			return new Error(err);
		});
};

module.exports = { users, populateUsers };
