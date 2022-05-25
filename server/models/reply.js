const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const replySchema = new Schema(
    {
        replyText: {
            type: String,
            required: true,
            maxlength: 280
        },
        sender: { // sender user name
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = replySchema;
