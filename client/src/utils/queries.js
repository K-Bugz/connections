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
query QueryUser {
  user {
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
    _id
  }
}
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;