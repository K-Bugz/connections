const { gql } = require('apollo-server-express');

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

  type Query {
    users: [User]
  }
  

`;

module.exports = typeDefs;
