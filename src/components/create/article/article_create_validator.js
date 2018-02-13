import validator from 'validator'

const articleValidatorSchema = (props) => {
  const {
    article_status,
    article_authorSerialNumber,
    article_title,
    article_content,
    article_tags,
  } = props
  const errors = {}

  // STATUS
  if (!article_status) {
    errors.article_status = 'Status is required.'
  }
  if ((article_status && validator.isEmpty(article_status)) || article_status === '0') {
    errors.article_status = 'Status is required.'
  }

  // AUTHOR
  if (!article_authorSerialNumber) {
    errors.article_authorSerialNumber = 'Author is required.'
  }

  // TITLE
  if (!article_title) {
    errors.article_title = 'Title is required.'
  }

  // TAGS
  if (!article_tags) {
    errors.article_tags = 'One or more Tags are required.'
  }

  // CONTENT
  if (!article_content) {
    errors.article_content = 'Content is required.'
  }

  // console.log('ERRORS', errors)
  return errors
}

export default articleValidatorSchema
