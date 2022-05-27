const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        title: {
            type: String,
            required: false,
        },
        about: {
            type: String,
            required: false,
        },
        website: {
            type: String,
            required: false,
        },
        profilePic: { // here 
            type: String,
            required: false,
        },
        coverPhoto: { // here 
            type: String,
            required: false,
        },
        resume: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        isJobSeeker: {
            type: Boolean,
            required: true
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        // May need to put back in for our own API for messages.
        // messages: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Message'
        //     }
        // ],
        connections: [ // connections is the saved jobs
            {
                type: Schema.Types.ObjectId,
                ref: 'Jobpost'
            }
        ],
        events: [
            { 
                type: Schema.Types.ObjectId,
                ref: 'Event'  
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

userSchema.virtual('connectionsCount').get(function () {
    return this.connections.length;
})

const User = model('User', userSchema); // the first parameter is how we reference to as ref!!!

module.exports = User;