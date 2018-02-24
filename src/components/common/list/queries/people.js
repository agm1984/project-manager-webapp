import gql from 'graphql-tag'

export default gql`
  query getAllPeople {
    getAllPeople {
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
      person_created,
      person_serialNumber
    }
  }
`
