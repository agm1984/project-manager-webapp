import gql from 'graphql-tag'

const GET_ARTICLES_QUERY = gql`
  query getAllArticles {
    getAllArticles {
      article_status
      article_title
      article_slug
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

export default GET_ARTICLES_QUERY
