import gql from 'graphql-tag'

export default gql`
  mutation login(
    $person_email: String!,
    $person_password: String!
  ) {
    login(
      person_email: $person_email,
      person_password: $person_password
    )
  }
`
