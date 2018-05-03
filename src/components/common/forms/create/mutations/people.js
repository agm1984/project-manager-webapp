import gql from 'graphql-tag'

export default gql`
  mutation addPerson(
    $person_status: String!,
    $person_memberType: String!,
    $person_canBeEmailed: Boolean,
    $person_avatar: String,
    $person_givenName: String!,
    $person_familyName: String!,
    $person_email: String!,
    $person_tel: String,
    $person_gender: String,
    $person_birthday: String,
    $person_location: String!,
    $person_bio: String,
    $person_password: String!
  ) {
    addPerson(
      person_status: $person_status,
      person_memberType: $person_memberType,
      person_canBeEmailed: $person_canBeEmailed,
      person_avatar: $person_avatar,
      person_givenName: $person_givenName,
      person_familyName: $person_familyName,
      person_email: $person_email,
      person_tel: $person_tel,
      person_gender: $person_gender,
      person_birthday: $person_birthday,
      person_location: $person_location,
      person_bio: $person_bio,
      person_password: $person_password
    ) {
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
      person_bio
    }
  }
`
