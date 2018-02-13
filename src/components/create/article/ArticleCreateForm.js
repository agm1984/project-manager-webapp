import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import {
  CreateSection, CreateInput, CreateInputTags, CreateListSelect, CreateQuill,
} from '../common'
import validate from './article_create_validator'

const ArticleCreateForm = (props) => {
  const {
    handleSubmit, onCreateSubmit, handleBackPress, pristine, submitting,
    onGetPlainText,
  } = props
  return (
    <form
      onSubmit={handleSubmit(onCreateSubmit)}
      autoComplete="off"
    >
      <CreateSection heading="COMPOSE">
        <Field
          label="Title"
          component={CreateInput}
          type="text"
          name="article_title"
          placeholder=""
          required
        />
        <Field
          label="Tags"
          component={CreateInputTags}
          name="article_tags"
          placeholder="Select Tags"
          required
        />
        <Field
          label="Status"
          component={CreateListSelect}
          name="article_status"
          placeholder="Select Status"
          options={['Draft', 'Active', 'Inactive']}
          required
        />
        <Field
          label="Content"
          component={CreateQuill}
          name="article_content"
          placeholder="What are you thinking today?"
          providePlainText={text => onGetPlainText(text)}
          required
        />
      </CreateSection>
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
            CREATE
          </button>
        </div>
      </div>
    </form>
  )
}

ArticleCreateForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onCreateSubmit: PropTypes.func.isRequired,
  handleBackPress: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  onGetPlainText: PropTypes.func.isRequired,
}

export default reduxForm({ validate, form: 'ArticleCreateForm' })(ArticleCreateForm)
