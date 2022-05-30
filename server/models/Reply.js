const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const replySchema = new Schema(
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
        },
        authorId: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = replySchema;