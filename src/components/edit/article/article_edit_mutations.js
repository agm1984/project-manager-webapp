import gql from 'graphql-tag'

export default gql`
mutation editArticle(
  $article_editorSerialNumber: String!
  $article_oldSlug: String!
  $article_status: String
  $article_title: String
  $article_plainText: String
  $article_content: String
  $article_tags: String
) {
  editArticle(
    article_editorSerialNumber: $article_editorSerialNumber
    article_oldSlug: $article_oldSlug
    article_status: $article_status
    article_title: $article_title
    article_plainText: $article_plainText
    article_content: $article_content
    article_tags: $article_tags
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
      person_status
      person_created
    }
    article_tags {
      tag_name
    }
  }
}
`
