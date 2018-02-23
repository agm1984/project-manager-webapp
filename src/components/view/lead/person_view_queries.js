import gql from 'graphql-tag'

export default gql`
  query getPerson(
    $person_serialNumber: String!
  ) {
    getPerson(
      person_serialNumber: $person_serialNumber
    ) {
      person_serialNumber,
      person_status,
      person_memberType,
      person_canBeEmailed,
      person_avatar,
      person_givenName,
      person_familyName,
      person_email,
      person_tel,
      person_gender,
      person_birthday,
      person_location,
      person_bio,
      person_created
    }
  }
`
