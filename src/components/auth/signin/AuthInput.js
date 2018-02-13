import React from 'react'
import PropTypes from 'prop-types'

const SignInInput = (props) => {
  const {
    input, name, placeholder, type, meta,
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
      <div className="row-md">
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          className={maybeHasError}
          {...input}
        />
      </div>
      {touched && (error && <span className="auth_field_error">{error}</span>)}
    </div>
  )
}

SignInInput.defaultProps = {
  input: undefined,
  name: undefined,
  placeholder: undefined,
  meta: undefined,
}
SignInInput.propTypes = {
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
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default SignInInput
