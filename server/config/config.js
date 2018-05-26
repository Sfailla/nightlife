// ENV VARIABLES

let env = process.env.NODE_ENV || 'development';
console.log('env === ', env);

if (env === 'development' || env === 'test') {
    let config = require('./config.json');
    let envConfig = config[env];

    Object.keys(envConfig).map((key) => {
        process.env[key] = envConfig[key];
    });
}

module.exports = env;