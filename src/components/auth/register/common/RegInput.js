import React from 'react'
import PropTypes from 'prop-types'
import PasswordQuality from './PasswordQuality'
import '../Register.css'

const RegInput = (props) => {
  const {
    input, name, placeholder, type, passwordEntry, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'reg_filled'
    : 'reg_empty'
  const maybeHasError = (touched && error)
    ? 'reg_input reg_input-error'
    : `reg_input reg_input-normal ${maybeHasValue}`
  return (
    <div className="reg_input-container">
      {passwordEntry && <PasswordQuality test={input.value} />}
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        className={maybeHasError}
        {...input}
      />
      {touched && (error && <span className="reg_error_text">{error}</span>)}
    </div>
  )
}

RegInput.defaultProps = {
  input: undefined,
  name: undefined,
  placeholder: undefined,
  passwordEntry: undefined,
  meta: undefined,
}
RegInput.propTypes = {
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
  passwordEntry: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default RegInput
