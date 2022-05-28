import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!, $isJobSeeker: Boolean!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, isJobSeeker: $isJobSeeker) {
    token
  }
}`;

export const SAVE_JOB = gql`
mutation saveJob($id: ID!, $isSaved: Boolean!) {
  saveJob(_id: $id, isSaved: $isSaved) {
    _id
    title
    link
    company
    location
    timePosted
    isSaved
    createdAt
  }
}
`;

export const UPDATE_PROFILE = gql`
mutation Mutation($firstName: String!, $lastName: String, $title: String, $website: String, $about: String) {
  updateProfile(firstName: $firstName, lastName: $lastName, title: $title, website: $website, about: $about) {
    _id
    firstName
    lastName
    email
    title
    about
    website
    profilePic
    coverPhoto
    resume
    isJobSeeker
  }
}
`;