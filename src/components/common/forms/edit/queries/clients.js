import gql from 'graphql-tag'

export default gql`
  query getClient(
    $client_serialNumber: String!
  ) {
    getClient(
      client_serialNumber: $client_serialNumber
    ) {
      client_serialNumber,
      client_status,
      client_memberType,
      client_canBeEmailed,
      client_avatar,
      client_givenName,
      client_familyName,
      client_email,
      client_tel,
      client_gender,
      client_birthday,
      client_location,
      client_bio,
      client_created
    }
  }
`
