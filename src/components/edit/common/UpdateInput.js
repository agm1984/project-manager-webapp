import React from 'react'
import PropTypes from 'prop-types'

const UpdateInput = (props) => {
  const {
    label, input, name, placeholder, type, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'edit_filled'
    : 'edit_empty'
  const maybeHasError = (touched && error)
    ? 'form-text-input error'
    : `form-text-input normal ${maybeHasValue}`
  return (
    <div className="edit_rowcontainer">
      <label className="edit_row" htmlFor={name}>
        <div className="edit_row-label">
          {label}
          {required && <span className="edit_asterisk">*</span>}
        </div>
        <div className="edit_row-item">
          <input
            id={name}
            placeholder={placeholder}
            type={type}
            className={maybeHasError}
            name={name}
            {...input}
          />
        </div>
      </label>
      {touched && (error && <span className="edit_required">{error}</span>)}
    </div>
  )
}

UpdateInput.defaultProps = {
  input: undefined,
  name: undefined,
  placeholder: undefined,
  required: undefined,
  meta: undefined,
}
UpdateInput.propTypes = {
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
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default UpdateInput
