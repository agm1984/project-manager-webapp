import gql from 'graphql-tag'

export default gql`
  query getAllArticles {
    getAllArticles {
      article_status
      article_title
      article_serialNumber
      article_created
      article_author {
        person_serialNumber
        person_givenName
        person_familyName
      }
      article_tags {
        tag_name
      }
    }
  }
`
