import React from 'react'
import PropTypes from 'prop-types'
import './Create.css'

const CreateGeoSelect = (props) => {
  const {
    label, input, thingPrefix, options, onChange, name, placeholder, required, meta,
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
            onChange={onChange}
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
                key={opt[`${thingPrefix}serialNumber`]}
                value={opt[`${thingPrefix}serialNumber`]}
                className="create_filled"
              >
                {opt[`${thingPrefix}label`]}
              </option>
            ))}
          </select>
        </div>
      </label>
      {touched && (error && <span className="create_required">{error}</span>)}
    </div>
  )
}

CreateGeoSelect.defaultProps = {
  input: undefined,
  options: [],
  onChange: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
}
CreateGeoSelect.propTypes = {
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
  thingPrefix: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default CreateGeoSelect
