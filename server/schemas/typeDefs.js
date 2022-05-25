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
  }

  type Query {
    users: [User]
  }

  type Mutation {
  addUser(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
