const { AuthenticationError } = require('apollo-server-express');
const { Error } = require('mongoose');
const { User, Jobpost } = require('../models');
const { signToken } = require('../utils/auth');
const { loginScrape } = require('../utils/jobScraperFunctions');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('savedJobs')
                .populate('friends');
        },
        user: async (parent, args, context) => { 
            return User.findOne({ email: context.user.email })
                .select('-__v -password')
                .populate('friends')
                .populate('savedJobs');
        },
        jobPosts: async () => {
            return Jobpost.find().sort({ _id: -1});
        },
        jobPost: async (parent, { _id }) => {
            return Jobpost.findOne(
                { _id: _id }
            )
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            loginScrape();

            return { token, user };
            // return user;
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

            loginScrape();

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
        }
    }
};

module.exports = resolvers;

