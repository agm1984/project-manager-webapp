import React from 'react'
import PropTypes from 'prop-types'
import './Edit.css'

const UpdateTextArea = (props) => {
  const {
    label, input, name, placeholder, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'edit_filled'
    : 'edit_empty'
  const maybeHasError = (touched && error)
    ? 'edit_textarea edit_select-error'
    : `edit_textarea edit_select-normal ${maybeHasValue}`
  return (
    <div className="edit_row-container">
      <label className="edit_row" htmlFor={name}>
        <div className="edit_row-label">
          {label}
          {required && <span className="edit_asterisk">*</span>}
        </div>
        <div className="edit_row-item">
          <textarea
            id={name}
            className={maybeHasError}
            name={name}
            placeholder={placeholder}
            {...input}
          />
        </div>
      </label>
      {touched && (error && <span className="edit_required">{error}</span>)}
    </div>
  )
}

UpdateTextArea.defaultProps = {
  input: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
}
UpdateTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any,
  }),
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default UpdateTextArea
