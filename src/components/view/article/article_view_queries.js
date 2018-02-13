import gql from 'graphql-tag'

export default gql`
  query getArticle(
    $article_slug: String!
  ) {
    getArticle(
      article_slug: $article_slug
    ) {
      article_title
      article_slug
      article_content
      article_plainText
      article_created
      article_status
      article_author {
        person_avatar
        person_serialNumber
        person_givenName
        person_familyName
        person_email
        person_location
        person_status
        person_created
      }
      article_tags {
        tag_name
      }
    }
  }
`
