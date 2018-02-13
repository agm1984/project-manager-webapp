import gql from 'graphql-tag'

export default gql`
  mutation Register(
    $person_status: String!
    $person_memberType: String!
    $person_givenName: String!,
    $person_familyName: String!,
    $person_email: String!,
    $person_location: String!,
    $person_password: String!
  ) {
    register(
      person_status: $person_status,
      person_memberType: $person_memberType,
      person_givenName: $person_givenName,
      person_familyName: $person_familyName,
      person_email: $person_email,
      person_location: $person_location,
      person_password: $person_password
    ) {
      token
    }
  }
`
