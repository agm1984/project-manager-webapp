import gql from 'graphql-tag'

/**
 * This GraphQL query gets the currently signed in user's Serial Number
 * to mark him/her as the Author of an Article.
 * It could be easily extended to retrieve additional fields.
 */
export default gql`
  query me {
    me {
      person_serialNumber,
    }
  }
`
