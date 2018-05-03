import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TagsInput from 'react-tagsinput'
import './Form.css'
import './ReactTagsInput.css'

class FormInputTags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
    }
    this.handleUpdateTags = this.handleUpdateTags.bind(this)
  }
  /**
   * When the Component mounts, initial tags should be set into the Component's state
   * where the `react-tagsinput` library will pick them up.
   */
  componentWillMount() {
    const { tags } = this.props
    return this.setState({ tags })
  }
  /**
   * When a tag is added or removed, the updated list of Tags
   * should be set into the Component's state. Tab and Enter Keys also add tags.
   * @param {Array} tags Updated Array of Tags
   */
  handleUpdateTags(tags) {
    this.props.input.onChange(tags)
    return this.setState({ tags })
  }
  render() {
    const {
      name, label, required, meta,
    } = this.props
    const { touched, error } = meta
    return (
      <div className="form_row-container">
        <label className="form_row" htmlFor={name}>
          <div className="form_row-label">
            {label}
            {required && <span className="form_asterisk">*</span>}
          </div>
          <div className="form_row-item">
            <TagsInput
              name={name}
              value={this.state.tags}
              onChange={this.handleUpdateTags}
              addKeys={[9, 13]}
              className="create_tags"
              inputProps={{
                className: 'create_tags-placeholder',
                placeholder: 'Add a tag',
              }}
              tagProps={{
                className: 'create_tags-tag',
                classNameRemove: 'create_tags-remove',
              }}
              onlyUnique
            />
          </div>
        </label>
        {touched && (error && <span className="form_required">{error}</span>)}
      </div>
    )
  }
}

FormInputTags.defaultProps = {
  tags: [],
  name: undefined,
  required: undefined,
  meta: undefined,
}
FormInputTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default FormInputTags
