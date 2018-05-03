import React from 'react'
import PropTypes from 'prop-types'
import {
  FormSection, FormShowText, FormShowQuill,
  FormShowEmail, FormShowImage,
} from '../../common/'
import { formatTime } from '../../../utils'

const ArticleViewForm = (props) => {
  const { initialValues } = props
  const {
    article_title,
    article_serialNumber,
    article_content,
    article_created,
    article_status,
    article_author,
    article_tags,
  } = initialValues
  const {
    person_avatar,
    person_givenName,
    person_familyName,
    person_email,
    person_location,
    person_status,
    person_created,
  } = article_author
  return [
    <FormSection isTop heading="DETAILS" key="details">
      <FormShowText name="Status" value={article_status} />
      <FormShowText name="Title" value={article_title || ''} />
      <FormShowText name="Slug" value={article_serialNumber || ''} />
      <FormShowText name="Created" value={formatTime(article_created) || ''} />
    </FormSection>,
    <FormSection heading="TAGS" key="tags">
      <FormShowText value={article_tags.map(tag => tag.tag_name).sort().join(', ') || ''} />
    </FormSection>,
    <FormSection heading="CONTENT" key="content">
      <FormShowQuill content={article_content} />
    </FormSection>,
    <FormSection heading="AUTHOR" key="author">
      <FormShowImage value={person_avatar || ''} />
      <FormShowText name="Name" value={`${person_givenName} ${person_familyName}`} />
      <FormShowEmail name="Email" value={person_email} />
      <FormShowText name="Location" value={person_location} />
      <FormShowText name="Joined" value={formatTime(person_created)} />
      <FormShowText name="Status" value={person_status} />
    </FormSection>,
  ]
}

ArticleViewForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default ArticleViewForm
