import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withApollo } from 'react-apollo'
import { reduxForm, Field } from 'redux-form'
import {
  FormSection, FormInput, FormInputTags,
  FormSelect, FormQuill,
} from '../../common'
import '../../common/Form.css'
// import validate from './article_edit_validator'

class ArticleEditForm extends Component {
  constructor(props) {
    super(props)
    this.article_plainText = props.initialValues.article_plainText
  }

  onGetPlainText = (text) => {
    this.article_plainText = text
  }

  readyToSubmit = (props) => {
    const { initialValues, person_serialNumber } = this.props
    const { article_serialNumber } = initialValues
    /**
     * Tags must be converted from an Array to comma-separated values String.
     * @param {Array} tags Array of Tags to be converted
     */
    const convertTagsToString = tags => tags.reduce((acc, tag, i) => {
      if (i === 0) return tag
      const string = `${acc},${tag}`
      return string
    }, '')
    return this.props.onEditSubmit({
      ...props,
      article_oldSlug: article_serialNumber,
      article_plainText: this.article_plainText,
      article_editorSerialNumber: person_serialNumber,
      article_tags: convertTagsToString(props.article_tags),
    })
  }

  render() {
    const {
      initialValues, handleSubmit, handleBackPress, pristine, submitting,
    } = this.props
    const tags = initialValues.article_tags
      .map(tag => tag.tag_name)
      .sort()
    return (
      <form
        onSubmit={handleSubmit(this.readyToSubmit)}
        autoComplete="off"
      >
        <FormSection isTop heading="EDIT">
          <Field
            label="Title"
            component={FormInput}
            type="text"
            name="article_title"
            placeholder=""
            required
          />
          <Field
            label="Tags"
            component={FormInputTags}
            name="article_tags"
            placeholder="Select Tags"
            tags={tags}
            required
          />
          <Field
            label="Status"
            component={FormSelect}
            name="article_status"
            placeholder="Select Status"
            options={['Draft', 'Active', 'Inactive']}
            required
          />
          <Field
            label="Content"
            component={FormQuill}
            name="article_content"
            providePlainText={text => this.onGetPlainText(text)}
            required
          />
        </FormSection>
        <div id="form_buttons-container">
          <div id="form_buttons">
            <button
              disabled={submitting}
              id="form_button-cancel"
              onClick={handleBackPress}
            >
              CANCEL
            </button>
            <button
              disabled={pristine || submitting}
              id="form_button-submit"
              type="submit"
            >
              UPDATE
            </button>
          </div>
        </div>
      </form>
    )
  }
}

ArticleEditForm.defaultProps = {
  person_serialNumber: undefined,
}
ArticleEditForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  handleBackPress: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  person_serialNumber: PropTypes.string,
}

/**
 * The currently signed in Person's Serial Number is used to set the Author
 * of the Article.
 * @param {Object} state The entire Redux State Tree
 */
const mapStateToProps = (state) => {
  if (state.auth.person) {
    const { person_serialNumber } = state.auth.person
    return {
      person_serialNumber,
    }
  }
  return null
}

export default compose(
  connect(mapStateToProps),
  reduxForm({ /*validate,*/ form: 'ArticleEditForm' }),
)(withApollo(ArticleEditForm))
