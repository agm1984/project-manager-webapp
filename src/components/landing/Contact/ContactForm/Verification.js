import React from 'react'
import PropTypes from 'prop-types'

const Verification = (props) => {
  const {
    input, name, placeholder, type, meta, solution,
  } = props
  const { touched, error } = meta
  const maybeIsSolved = (input.value && (solution === +input.value))
    ? 'contact_verification-pass'
    : (!input.value) ? '' : 'contact_verification-fail'
  const maybeHasValue = (input.value)
    ? 'edit_filled'
    : 'edit_empty'
  const maybeHasError = (touched && error)
    ? `contact_input ${maybeIsSolved} error`
    : `contact_input ${maybeIsSolved} normal ${maybeHasValue}`
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

Verification.defaultProps = {
  input: undefined,
  name: undefined,
  placeholder: undefined,
  meta: undefined,
}
Verification.propTypes = {
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
  solution: PropTypes.number.isRequired,
}

export default Verification
