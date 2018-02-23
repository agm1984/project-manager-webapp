import React from 'react'
import PropTypes from 'prop-types'
import './Create.css'

const CreateListSelect = (props) => {
  const {
    label, input, options, name, placeholder, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'create_filled'
    : 'create_empty'
  const maybeHasError = (touched && error)
    ? 'create_select create_select-error'
    : `create_select create_select-normal ${maybeHasValue}`
  return (
    <div className="create_row-container">
      <label className="create_row" htmlFor={name}>
        <div className="create_row-label">
          {label}
          {required && <span className="create_asterisk">*</span>}
        </div>
        <div className="create_row-item">
          <select
            id={name}
            className={maybeHasError}
            name={name}
            {...input}
          >
            <option
              value={0}
              className="create_empty"
            >
              {placeholder}
            </option>
            {options && options.map(opt => (
              <option
                key={opt}
                value={opt}
                className="create_selectList"
              >
                {opt}
              </option>
            ))}
          </select>
        </div>
      </label>
      {touched && (error && <span className="create_required">{error}</span>)}
    </div>
  )
}

CreateListSelect.defaultProps = {
  input: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
}
CreateListSelect.propTypes = {
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default CreateListSelect
