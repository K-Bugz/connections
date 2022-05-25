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

  type JobPost {
    _id: ID
    title: String
    link: String
    company: String
    location: String
    timeposted: String
  }

  type Message {
    _id: ID
    sender: String
    reciever: String
    messageText: String
    createdAt: String
    reply: [Reply]
  }

  type Reply {
    _id: ID
    reactionBody: String
    createdAt: String
    senderUserName: String
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
    messeges(userName: _id!): Message
    user(username: String!): User
    jobposts(username: String!): JobPost
  }
  
`;

// exporting
module.exports = typeDefs;