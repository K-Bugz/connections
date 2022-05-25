const { gql } = require('apollo-server-express');

// In User need to update for images


// All type definitions need to specify what type of data is expected in return, no matter what.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    title: String
    about: String
    website: String
    profilePic: String
    coverPhoto: String
    resume: String
  }

  type Jobpost {
    _id: ID
    title: String
    link: String
    company: String
    location: String
    timeposted: String
  }

  type Message {
    _id: ID
    messageText: String
    createdAt: String
  }

  type Auth {
    _id: ID
    token: ID!
    user: User
    username: String
    email: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    jobposts(username: String!): JobPost
  }
  
  type Mutation {
    
  }
`;

// exporting
module.exports = typeDefs;