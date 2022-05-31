const { AuthenticationError } = require('apollo-server-express');
const { Error } = require('mongoose');
const { User, Jobpost, Message } = require('../models');
const { signToken } = require('../utils/auth');
const { loginScrape } = require('../utils/jobScraperFunctions');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('connections')
                .populate('messages')
                .populate('savedJobs')
        },
        user: async (parent, args, context) => {
            return User.findOne({ email: context.user.email })
                .select('-__v -password')
                .populate('friends')
                .populate('connections')
                .populate('messages')
                .populate('savedJobs')
        },
        jobPosts: async () => {
            return Jobpost.find().sort({ _id: -1 });
        },
        jobPost: async (parent, { _id }) => {
            return Jobpost.findOne(
                { _id: _id }
            )
        },
        // Find one user's message array
        messages: async (parent, args, context) => {
            return User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('messages')
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            loginScrape();

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email: email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
                // we say 'Incorrect credentials' because we don't want anyone know they got something right.
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            refreshDBJobs();

            const token = signToken(user);
            return { token, user };
            // return user;
        },
        updateProfile: async (parent, args, context) => {
            try {
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    {
                        firstName: args.firstName,
                        lastName: args.lastName,
                        title: args.title,
                        website: args.website,
                        about: args.about
                    },
                    { new: true }
                );
                return user;
            } catch (err) {
                console.log(err);
            }
        },
        addJobs: async (parent, args) => {
            const newjob = await Jobpost.insertMany({
                title: args.title,
                link: args.link,
                company: args.company,
                location: args.location,
                timePosted: args.timePosted
            })
            return newjob;
        },
        saveJob: async (parent, { _id, isSaved }, context) => {
            try {
                const updatedJob = await Jobpost.findByIdAndUpdate(
                    { _id: _id },
                    { isSaved: isSaved },
                    { new: true }
                );
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedJobs: _id } },
                    { new: true }
                ).populate('savedJobs');
                if (updatedJob && user) {
                    return updatedJob;
                }
            } catch (err) {
                console.log(err);
            }
        },
        removeJob: async (parent, { _id }, context) => {
            try {
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedJobs: _id } },
                    { new: true }
                ).populate('savedJobs');
                if (user) {
                    return user;
                }
            } catch (err) {
                console.log(err);
            }
        },
        deleteJobpost: async (parent, { _id }) => {
            const deletedJob = await Jobpost.findByIdAndDelete({ _id: _id });
            if (!deletedJob) {
                throw new Error('No job with that id found');
            }
            return deletedJob;
        },
        deleteJobposts: async () => {
            try {
                const remainingJobs = await Jobpost.deleteMany({ isSaved: false });
                if (remainingJobs) {
                    return Jobpost.find();
                }
            } catch (err) {
                console.log(err)
            }
        },
        deleteAllUser: async () => {
            try {
                const remainingJobs = await User.deleteMany({});
                if (remainingJobs) {
                    return User.find();
                }
            } catch (err) {
                console.log(err)
            }
        },
        addMessage: async (parent, args, context) => {
            try {
                const newMessage = await Message.create({})
                const sender = await Message.findOneAndUpdate({ _id: newMessage._id }, { $push: { sender: context.user._id } }, { new: true })
                if (newMessage) {
                    const user = await User.findOneAndUpdate({ _id: context.user._id }, { $push: { messages: newMessage._id } }, { new: true })
                    return user;
                }
            }
            catch (err) {
                console.log(err)
            }
        },
        // May need to update. Two different users. How about notifications? 
        addReply: async (parent, args, context) => {
            try {
                const newReply = await Message.findOneAndUpdate({ _id: args.messageId }, { $push: { reply: { authorId: context.user._id, replyText: args.replyText } } }, { new: true })
                return newReply;
            }
            catch (err) {
                console.log(err)
            }
        }
    }
};

module.exports = resolvers;