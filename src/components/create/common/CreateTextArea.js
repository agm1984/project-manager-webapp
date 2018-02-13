import React from 'react'
import PropTypes from 'prop-types'

const CreateTextArea = (props) => {
  const {
    label, input, name, placeholder, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'edit_filled'
    : 'edit_empty'
  const maybeHasError = (touched && error)
    ? 'form-text-input edit_multi error'
    : `form-text-input edit_multi normal ${maybeHasValue}`
  return (
    <div className="edit_rowcontainer">
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

CreateTextArea.defaultProps = {
  input: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
}
CreateTextArea.propTypes = {
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

export default CreateTextArea
