const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// You can only message people you are friends with in search otherwise you would have to see them by thier own page. (looks up by user.id)
const messageSchema = new Schema(
    { // sender and reciever should be usernames!!!
        sender: { // can get by login
            type: String,
            required: true
        },
        reciever: { // I am thinking by navigating to their page or by a search function on the message PAGE. 
            type: String,
            required: true
        },
        messageText: {
            type: String,
            required: 'You need to leave a Message!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        reply: [replySchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Message = model('Message', messageSchema);

module.exports = Message;
