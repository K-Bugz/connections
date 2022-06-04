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
    messages: [Message]
    savedJobs:[Jobpost]
    connections: [User]
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
  type Message {
    _id: ID
    sender: User
    reciever: User
    createdAt: String
    reply: [Reply]
  }
  type Reply {
    _id: ID
    replyText: String!
    createdAt: String
    authorId: String
  }


  type Query {
    users: [User]
    user: User
    jobPosts: [Jobpost]
    jobPost(_id: ID!): Jobpost
    message(_id: ID!): Message
    findAllUserMessages: [Message]
    findMessagesSender: [Message]
    findMessagesReciever: [Message]
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
    addMessage(reciever: ID!): Message
    addReply(replyText: String!, messageId: ID!): Message
    deleteAllUser: User
    addFriend(_id: ID!): User
  }
`;

module.exports = typeDefs;
