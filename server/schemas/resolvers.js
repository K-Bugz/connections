const { AuthenticationError } = require('apollo-server-express');
const { Error } = require('mongoose');
const { User, Jobpost, Message } = require('../models');
const { signToken } = require('../utils/auth');
const { refreshDBJobs } = require('../utils/jobScraperFunctions');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            return User.find({ _id: { $ne: context.user._id } })
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
        // Find a message by ID of reciever and token is sender
        message: async (parent, args, context) => {
            return Message.findById(args._id)
                .populate('sender') // get sender or logged in person's info
                .populate('reciever') // get whom ever they are sending's info
        },
        // The goal is to find all the messages of a particular user regardless if started (sender) or recived a message
        findAllUserMessages: async (parent, args, context) => {
            const group1 = Message.find({ sender: context.user._id })
                .populate('sender')
                .populate('reciever')
            const group2 = Message.find({ reciever: context.user._id })
                .populate('sender')
                .populate('reciever')
            if (group1 && group2) {
                return { group1, group2 };
            }
            if (group1) {
                return group1
            }
            if (group2) {
                return group2
            }
        },
        findMessagesSender: async (parent, args, context) => {
            return Message.find({ sender: context.user._id })
                .populate('sender')
                .populate('reciever')
        },
        findMessagesReciever: async (parent, args, context) => {
            return Message.find({ reciever: context.user._id })
                .populate('sender')
                .populate('reciever')
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
        addMessage: async (parent, args, context) => { // This works but only gives back IDs of users
            try {
                const newMessage = await Message.create({ sender: context.user._id, reciever: args.reciever })
                // .populate('sender')
                // .populate('reciever')
                return newMessage; // does not show up in Apollo
            }
            catch (err) {
                console.log(err)
            }
        },
        // SUPERMVP! How about notifications? 
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