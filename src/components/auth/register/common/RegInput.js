import React from 'react'
import PropTypes from 'prop-types'
import PasswordQuality from './PasswordQuality'

const RegInput = (props) => {
  const {
    input, name, placeholder, type, passwordEntry, meta,
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
      {passwordEntry && <PasswordQuality test={input.value} />}
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
