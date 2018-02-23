import React from 'react'
import PropTypes from 'prop-types'
import './Create.css'

const CreateInput = (props) => {
  const {
    label, input, name, placeholder, type, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'create_filled'
    : 'create_empty'
  const maybeHasError = (touched && error)
    ? 'create_input create_input-error'
    : `create_input create_input-normal ${maybeHasValue}`
  return (
    <div className="create_row-container">
      <label className="create_row" htmlFor={name}>
        <div className="create_row-label">
          {label}
          {required && <span className="create_asterisk">*</span>}
        </div>
        <div className="create_row-item">
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
      {touched && (error && <span className="create_required">{error}</span>)}
    </div>
  )
}

CreateInput.defaultProps = {
  input: undefined,
  name: undefined,
  placeholder: undefined,
  required: undefined,
  meta: undefined,
}
CreateInput.propTypes = {
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

export default CreateInput
