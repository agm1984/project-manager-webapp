import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import {
  UpdateSection, UpdateInput, UpdateInputTags,
  UpdateListSelect, UpdateQuill,
} from '../common'
import validate from './article_edit_validator'

const ArticleEditForm = (props) => {
  const {
    handleSubmit, initialValues, onEditSubmit, handleBackPress,
    pristine, submitting, onGetPlainText,
  } = props
  const tags = initialValues.article_tags.map(tag => tag.tag_name).sort()
  return (
    <form
      onSubmit={handleSubmit(onEditSubmit)}
      autoComplete="off"
    >
      <UpdateSection isTop heading="EDIT">
        <Field
          label="Title"
          component={UpdateInput}
          type="text"
          name="article_title"
          placeholder=""
          required
        />
        <Field
          label="Tags"
          component={UpdateInputTags}
          name="article_tags"
          placeholder="Select Tags"
          tags={tags}
          required
        />
        <Field
          label="Status"
          component={UpdateListSelect}
          name="article_status"
          placeholder="Select Status"
          options={['Draft', 'Active', 'Inactive']}
          required
        />
        <Field
          label="Content"
          component={UpdateQuill}
          name="article_content"
          providePlainText={text => onGetPlainText(text)}
          required
        />
      </UpdateSection>
      <div className="edit_button-container">
        <div className="edit_buttons">
          <button
            disabled={submitting}
            className="edit_button-grey"
            onClick={handleBackPress}
          >
            CANCEL
          </button>
          <button
            disabled={pristine || submitting}
            className="edit_button-red"
            type="submit"
          >
            UPDATE
          </button>
        </div>
      </div>
    </form>
  )
}

ArticleEditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  handleBackPress: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  onGetPlainText: PropTypes.func.isRequired,
}

export default reduxForm({ validate, form: 'ArticleEditForm' })(ArticleEditForm)
