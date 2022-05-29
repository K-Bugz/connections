const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    title: String
    about: String
    website: String
    profilePic: String
    coverPhoto: String
    resume: String
    isJobSeeker: Boolean
    savedJobs:[Jobpost]
  }

  type Jobpost {
    _id: ID
    title: String!
    link: String!
    company: String!
    location: String
    timePosted: String
    isSaved: Boolean
    createdAt: String
  }

  type Query {
    users: [User]
    user: User
    jobPosts: [Jobpost]
    jobPost(_id: ID!): Jobpost
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, isJobSeeker: Boolean!): Auth
    updateProfile(firstName: String!, lastName: String, title: String, website: String, about: String): User
    addJobs(title: String!, link: String!, company: String!, location: String, timePosted: String): [Jobpost]
    saveJob(_id: ID!, isSaved: Boolean!): Jobpost
    removeJob(_id: ID!): User
    deleteJobpost(_id: ID!): Jobpost
    deleteJobposts: [Jobpost]
    deleteAllUser: User
  }
`;

module.exports = typeDefs;
