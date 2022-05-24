const { gql } = require('apollo-server-express');

// save username, title, website, about


// All type definitions need to specify what type of data is expected in return, no matter what.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String

  }

  type Jobpost {
    _id: ID
    username: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
    _id: ID
    username: String
    email: String
  }

  type Query {
    users: [User]
    user(username: String!): User

    jobposts(username: String!): JobPost

  }

  type Mutation {
    
  }
`;

// exporting
module.exports = typeDefs;
