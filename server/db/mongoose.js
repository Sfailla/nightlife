const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGOOSE_URI)
    .then(() => console.log('connection established to MLAB database'))
    .catch(err => console.log(`${err.name} \n there is an error with mongoose connect: ${err.code}`));


module.exports = mongoose;
