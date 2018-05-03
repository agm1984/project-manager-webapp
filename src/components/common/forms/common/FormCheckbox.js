import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const FormCheckbox = (props) => {
  const {
    label, input, name, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'form_filled'
    : 'form_empty'
  const maybeHasError = (touched && error)
    ? 'form_checkbox form_state-error'
    : `form_checkbox form_state-normal ${maybeHasValue}`
  return (
    <div className="form_row-container">
      <label className="form_row" htmlFor={name}>
        <div className="form_row-label">
          {label}
          {required && <span className="form_asterisk">*</span>}
        </div>
        <div className="form_row-item" style={{ paddingLeft: '0.8rem' }}>
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
      {touched && (error && <span className="form_required">{error}</span>)}
    </div>
  )
}

FormCheckbox.defaultProps = {
  input: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
}
FormCheckbox.propTypes = {
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

export default FormCheckbox
