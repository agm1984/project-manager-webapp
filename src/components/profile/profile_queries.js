import gql from 'graphql-tag'

/**
 * This GraphQL query gets the currently signed in user's profile details
 * for the Profile View. It can be easily extended to retrieve more fields.
 */
export default gql`
  query me {
    me {
      person_memberType,
      person_avatar,
      person_givenName,
      person_familyName,
      person_email,
      person_location,
      person_created
    }
  }
`
