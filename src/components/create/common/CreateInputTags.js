import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TagsInput from 'react-tagsinput'
import './Create.css'
import './CreateTags.css'

class CreateInputTags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
    }
    this.handleUpdateTags = this.handleUpdateTags.bind(this)
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
      <div className="create_row-container">
        <label className="create_row" htmlFor={name}>
          <div className="create_row-label">
            {label}
            {required && <span className="create_asterisk">*</span>}
          </div>
          <div className="create_row-item">
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
        {touched && (error && <span className="create_required">{error}</span>)}
      </div>
    )
  }
}

CreateInputTags.defaultProps = {
  name: undefined,
  required: undefined,
  meta: undefined,
}
CreateInputTags.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  required: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default CreateInputTags
