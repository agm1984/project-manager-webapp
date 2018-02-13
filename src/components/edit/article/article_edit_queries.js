import gql from 'graphql-tag'

/**
 * This GraphQL Query gets the data required to edit an Article.
 */
export const GET_ARTICLE_QUERY = gql`
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

/**
 * This GraphQL query gets the currently signed in user's Serial Number
 * to mark him/her as the Editor of an Article.
 * It could be easily extended to retrieve additional fields.
 */
export const GET_ME_QUERY = gql`
  query me {
    me {
      person_serialNumber,
    }
  }
`
