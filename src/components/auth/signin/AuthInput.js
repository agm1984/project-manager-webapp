import React from 'react'
import PropTypes from 'prop-types'
import './Signin.css'

const SignInInput = (props) => {
  const {
    input, name, placeholder, type, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'signin_filled'
    : 'signin_empty'
  const maybeHasError = (touched && error)
    ? 'signin_input signin_input-error'
    : `signin_input signin_input-normal ${maybeHasValue}`
  return (
    <div className="signin_input-container">
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        className={maybeHasError}
        {...input}
      />
      {touched && (error && <span className="signin_error_text">{error}</span>)}
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
