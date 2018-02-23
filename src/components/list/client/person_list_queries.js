import gql from 'graphql-tag'

const GET_PEOPLE_QUERY = gql`
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

export default GET_PEOPLE_QUERY
