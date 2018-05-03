import gql from 'graphql-tag'

export default gql`
  query getAllClients {
    getAllClients {
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
      client_created,
      client_serialNumber
    }
  }
`
