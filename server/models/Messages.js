const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const replySchema = require('../models/Reply')
// You can only message people you are friends with in search otherwise you would have to see them by their own page. (looks up by user.id)
const messageSchema = new Schema(
    {
        sender:
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
        ,
        reciever:
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
        ,
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