import React from 'react'
import PropTypes from 'prop-types'

const UpdateCheckbox = (props) => {
  const {
    label, input, name, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'edit_filled'
    : 'edit_empty'
  const maybeHasError = (touched && error)
    ? 'edit_checkbox error'
    : `edit_checkbox normal ${maybeHasValue}`
  return (
    <div className="edit_rowcontainer">
      <label className="edit_row" htmlFor={name}>
        <div className="edit_row-label">
          {label}
          {required && <span className="edit_asterisk">*</span>}
        </div>
        <div className="edit_row-item" style={{ paddingLeft: '0.8rem' }}>
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
      {touched && (error && <span className="edit_required">{error}</span>)}
    </div>
  )
}

UpdateCheckbox.defaultProps = {
  input: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
}
UpdateCheckbox.propTypes = {
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

export default UpdateCheckbox
