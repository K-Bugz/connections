const { Schema, model } = require('mongoose');

const jobpostSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
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
        }
    },
);

const Jobpost = model('Jobpost', jobpostSchema);

module.exports = Jobpost;