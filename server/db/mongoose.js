const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
	.connect(process.env.MONGOOSE_URI, {
<<<<<<< Updated upstream
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
	.then(() => console.log('connection established to MLAB database'))
	.catch(err =>
		console.log(
			`${err.name} \n there is an error with mongoose connect: ${err.code} ${err.errmsg}`
=======
		useNewUrlParser: true
	})
	.then(() => console.log('connection established to MLAB database'))
	.catch(err =>
		console.error(
			`${err.name} \n there is an error with mongoose connect: ${err.code}\n errorName => ${err.errmsg}`
>>>>>>> Stashed changes
		)
	);

module.exports = mongoose;
