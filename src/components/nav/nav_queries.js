import gql from 'graphql-tag'

/**
 * This GraphQL query gets the currently signed in user's profile picture.
 * It could be easily extended to retrieve additional fields.
 */
export default gql`
  query me {
    me {
      person_avatar,
    }
  }
`
