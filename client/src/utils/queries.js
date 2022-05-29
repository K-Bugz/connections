import { gql } from '@apollo/client';

export const QUERY_ALLJOBS = gql`
query FindAllJobs {
  jobPosts {
    _id
    title
    link
    company
    location
    timePosted
    isSaved
    createdAt
  }
}`;

export const QUERY_USER = gql`
query queryUser {
  user {
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
    savedJobs {
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
}
`;