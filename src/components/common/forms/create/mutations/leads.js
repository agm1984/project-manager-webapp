import gql from 'graphql-tag'

export default gql`
  mutation addLead(
    $lead_status: String!,
    $lead_memberType: String!,
    $lead_canBeEmailed: Boolean,
    $lead_avatar: String,
    $lead_givenName: String!,
    $lead_familyName: String!,
    $lead_email: String!,
    $lead_tel: String,
    $lead_gender: String,
    $lead_birthday: String,
    $lead_location: String!,
    $lead_bio: String,
    $lead_password: String!
  ) {
    addLead(
      lead_status: $lead_status,
      lead_memberType: $lead_memberType,
      lead_canBeEmailed: $lead_canBeEmailed,
      lead_avatar: $lead_avatar,
      lead_givenName: $lead_givenName,
      lead_familyName: $lead_familyName,
      lead_email: $lead_email,
      lead_tel: $lead_tel,
      lead_gender: $lead_gender,
      lead_birthday: $lead_birthday,
      lead_location: $lead_location,
      lead_bio: $lead_bio,
      lead_password: $lead_password
    ) {
      lead_status,
      lead_memberType,
      lead_canBeEmailed,
      lead_avatar,
      lead_givenName,
      lead_familyName,
      lead_email,
      lead_tel,
      lead_gender,
      lead_birthday,
      lead_location,
      lead_bio
    }
  }
`
