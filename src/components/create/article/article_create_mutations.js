import gql from 'graphql-tag'

export default gql`
  mutation addArticle(
    $article_status: String!
    $article_authorSerialNumber: String!
    $article_title: String!
    $article_content: String!
    $article_plainText: String!
    $article_tags: String!
  ) {
    addArticle(
      article_status: $article_status
      article_authorSerialNumber: $article_authorSerialNumber
      article_title: $article_title
      article_content: $article_content
      article_plainText: $article_plainText
      article_tags: $article_tags
    ) {
      article_title
      article_content
      article_plainText
      article_created
      article_status
      article_author {
        person_email
      }
      article_tags {
        tag_name
      }
    }
  }
`
