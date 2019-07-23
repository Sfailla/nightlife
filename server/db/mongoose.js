const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

console.log(process.env.MONGOOSE_URI);

mongoose
	.connect(process.env.MONGOOSE_URI, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
	.then(() => console.log('connection established to MLAB database'))
	.catch(err =>
		console.log(`${err.name} \n there is an error with mongoose connect: ${err.code} ${err.errmsg}`)
	);

module.exports = mongoose;
