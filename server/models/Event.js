const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const jobpostSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        
    },
);

const Jobpost = model('Jobpost', jobpostSchema);

module.exports = Jobpost;