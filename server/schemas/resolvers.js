const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            // created user with args as data
            const user = await User.create(args);

            // const token = signToken(user);
            // return { user, token };

            return user;
        }
    }
};

module.exports = resolvers;
