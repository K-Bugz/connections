const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const jobpostSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true,
            unique: true
        },
        company: {
            type: String,
            required: true
        },
        location: {
            type: String,
        },
        timePosted: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
);

const Jobpost = model('Jobpost', jobpostSchema);

module.exports = Jobpost;