import gql from 'graphql-tag'

export default gql`
  mutation editClient(
    $client_serialNumber: String!,
    $client_status: String,
    $client_memberType: String,
    $client_canBeEmailed: Boolean,
    $client_avatar: String,
    $client_givenName: String,
    $client_familyName: String,
    $client_email: String,
    $client_tel: String,
    $client_gender: String,
    $client_birthday: String,
    $client_location: String,
    $client_bio: String,
    $client_password: String
  ) {
    editClient(
      client_serialNumber: $client_serialNumber,
      client_status: $client_status,
      client_memberType: $client_memberType,
      client_canBeEmailed: $client_canBeEmailed,
      client_avatar: $client_avatar,
      client_givenName: $client_givenName,
      client_familyName: $client_familyName,
      client_email: $client_email,
      client_tel: $client_tel,
      client_gender: $client_gender,
      client_birthday: $client_birthday,
      client_location: $client_location,
      client_bio: $client_bio,
      client_password: $client_password
    ) {
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
      client_bio
    }
  }
`
