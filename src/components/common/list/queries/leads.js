import gql from 'graphql-tag'

export default gql`
  query getAllLeads {
    getAllLeads {
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
      lead_created,
      lead_serialNumber
    }
  }
`
