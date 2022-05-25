const { AuthenticationError } = require('apollo-server-express');
const { User, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // I must find myself. 
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('thoughts')
                    .populate('friends');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        // find all users
        users: async () => { // get all users
            return User.find()
                .select('-__v -pasword')
                .populate('messages')
                .populate('connections')
        },
        // find one user by username
        user: async (parent, { username }) => { // get a user by username
            return User.findOne({ username })
                .select('-__v -password') // omitting this data from the search
                .populate('messages') // populate this users messages
                .populate('connections')
        },
        // Find all messages
        messages: async (parent, { sender }) => {
            const params = sender ? { sender } : {};
            return Message.find(params).sort({ createdAt: -1 });
        },
        message: async (parent, { _id }) => {
            return Message.findOne({ _id });
        }
    },

    // Mutations
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        }

    }
};

module.exports = resolvers;
