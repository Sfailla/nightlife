const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    avatar: {
        type: String,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    tokens: [{
        access: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            required: true,
        }
    }],
    created_at: {
        type: Date,
        default: Date.now
    }
})

// Presave Method

UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                this.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

// METHODS

UserSchema.methods = {
    generateAuthToken: function() {
        const access = 'auth';
        const token = jwt.sign({
            _id: this._id.toHexString(),
            access,
        }, process.env.JWT_SECRET).toString();

        this.tokens = this.tokens.concat({ token, access });

        return this.save()
            .then(() => token);
    },

    removeToken: function (token) {
        return this.update({
            $pull: {
                tokens: { token }
            }
        })
    }
}

// STATICS

UserSchema.statics = {
    findByCredentials: (username, password) => {
        return User.findOne({ username })
            .then(user => {
                if (!user) {
                    console.log('there is a problem with user sign-in')
                    return Promise.reject();
                }
                return new Promise((resolve, reject) => {
                    bcrypt.compare(password, user.password, (err, res) => {
                        if (res) {
                            resolve(user);
                        } else {
                            reject();
                        }
                    })
                })
            })
    },

    findByToken: (token) => {
        let decoded;

        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET)
        } catch (e) {
            return Promise.reject();
        }

        const auth = 'auth';

        return User.findOne({
            '_id': decoded._id,
            'tokens.token': token,
            'tokens.access': auth
        })
    }
}

const User = mongoose.model('users', UserSchema);

module.exports = User;
