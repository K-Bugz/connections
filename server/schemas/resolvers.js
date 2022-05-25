const { AuthenticationError } = require('apollo-server-express');
const { User, Jobpost } = require('../models');
const { signToken } = require('../utils/auth');

// need to Auth to add job posts to database.

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
    },
    Mutation: {
        addUser: async (parent, args) => {
            // created user with args as data
            const user = await User.create(args);

            const token = signToken(user);

            return { user, token };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                // we say 'Incorrect credentials' to deter hackers and stop them from knowing they may have gotten one thing right.
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user)
            return { token, user };
        },
        addMessage: async (parent, args, context) => {
            // if context is logged in
            if (context.user) {
                const message = await Message.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { messages: message._id } },
                    { new: true },
                );

                return message;
            }
            throw new AuthenticationError('You need to be logged in!!!');
        }
    }
};

module.exports = resolvers;