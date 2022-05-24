const { AuthenticationError } = require('apollo-server-express');
const { User, Jobpost } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => { // get all users
            return User.find()
            .select('-__v -pasword')
            .populate()
            .populate()
        },
        user: async (parent, { username }) => { // get a user by username
            return User.findOne({ username })
                .select('-__v -password') // omitting this data from the search
                .populate()
                .populate()
        },
    }
};

module.exports = resolvers;
