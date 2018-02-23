import React from 'react'
import PropTypes from 'prop-types'
import './Create.css'

const CreateTextArea = (props) => {
  const {
    label, input, name, placeholder, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'create_filled'
    : 'create_empty'
  const maybeHasError = (touched && error)
    ? 'create_textarea create_select-error'
    : `create_textarea create_select-normal ${maybeHasValue}`
  return (
    <div className="create_row-container">
      <label className="create_row" htmlFor={name}>
        <div className="create_row-label">
          {label}
          {required && <span className="create_asterisk">*</span>}
        </div>
        <div className="create_row-item">
          <textarea
            id={name}
            className={maybeHasError}
            name={name}
            placeholder={placeholder}
            {...input}
          />
        </div>
      </label>
      {touched && (error && <span className="create_required">{error}</span>)}
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
