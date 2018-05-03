import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const FormInput = (props) => {
  const {
    label, input, name, placeholder, type, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'form_filled'
    : 'form_empty'
  const maybeHasError = (touched && error)
    ? 'form_input form_state-error'
    : `form_input form_state-normal ${maybeHasValue}`
  return (
    <div className="form_row-container">
      <label className="form_row" htmlFor={name}>
        <div className="form_row-label">
          {label}
          {required && <span className="form_asterisk">*</span>}
        </div>
        <div className="form_row-item">
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
      {touched && (error && <span className="form_required">{error}</span>)}
    </div>
  )
}

FormInput.defaultProps = {
  input: undefined,
  name: undefined,
  placeholder: undefined,
  required: undefined,
  meta: undefined,
}
FormInput.propTypes = {
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

export default FormInput
