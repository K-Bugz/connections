const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reply = new Schema(
    {
        replyText: {
            type: String,
            required: true,
            maxlength: 280
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

module.exports = reply;