import React from 'react'
import PropTypes from 'prop-types'
import './Create.css'

const CreateCheckbox = (props) => {
  const {
    label, input, name, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'create_filled'
    : 'create_empty'
  const maybeHasError = (touched && error)
    ? 'create_checkbox create_input-error'
    : `create_checkbox create_input-normal ${maybeHasValue}`
  return (
    <div className="create_row-container">
      <label className="create_row" htmlFor={name}>
        <div className="create_row-label">
          {label}
          {required && <span className="create_asterisk">*</span>}
        </div>
        <div className="create_row-item" style={{ paddingLeft: '0.8rem' }}>
          <input
            id={name}
            className={maybeHasError}
            type="checkbox"
            name={name}
            value="certified"
            {...input}
          />
        </div>
      </label>
      {touched && (error && <span className="create_required">{error}</span>)}
    </div>
  )
}

CreateCheckbox.defaultProps = {
  input: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
}
CreateCheckbox.propTypes = {
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
  required: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default CreateCheckbox
