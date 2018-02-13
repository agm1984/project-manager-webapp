import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TagsInput from 'react-tagsinput'

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
      <div className="edit_rowcontainer">
        <label className="edit_row" htmlFor={name}>
          <div className="edit_row-label">
            {label}
            {required && <span className="edit_asterisk">*</span>}
          </div>
          <div className="edit_row-item">
            <TagsInput
              name={name}
              value={this.state.tags}
              onChange={this.handleUpdateTags}
              addKeys={[9, 13]}
              onlyUnique
            />
          </div>
        </label>
        {touched && (error && <span className="edit_required">{error}</span>)}
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
