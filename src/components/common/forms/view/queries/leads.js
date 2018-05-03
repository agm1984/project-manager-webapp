import gql from 'graphql-tag'

export default gql`
  query getLead(
    $lead_serialNumber: String!
  ) {
    getLead(
      lead_serialNumber: $lead_serialNumber
    ) {
      lead_serialNumber,
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
      lead_bio,
      lead_created
    }
  }
`
