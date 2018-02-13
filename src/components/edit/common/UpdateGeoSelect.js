import React from 'react'
import PropTypes from 'prop-types'

const UpdateGeoSelect = (props) => {
  const {
    label, input, thingPrefix, options, onChange, name, placeholder, required, meta,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'edit_filled'
    : 'edit_empty'
  const maybeHasError = (touched && error)
    ? 'edit_select error'
    : `edit_select normal ${maybeHasValue}`
  return (
    <div className="edit_rowcontainer">
      <label className="edit_row" htmlFor={name}>
        <div className="edit_row-label">
          {label}
          {required && <span className="edit_asterisk">*</span>}
        </div>
        <div className="edit_row-item">
          <select
            id={name}
            className={maybeHasError}
            name={name}
            onChange={onChange}
            {...input}
          >
            <option
              value={0}
              className="edit_empty"
            >
              {placeholder}
            </option>
            {options && options.map(opt => (
              <option
                key={opt[`${thingPrefix}serialNumber`]}
                value={opt[`${thingPrefix}serialNumber`]}
                className="edit_filled"
              >
                {opt[`${thingPrefix}label`]}
              </option>
            ))}
          </select>
        </div>
      </label>
      {touched && (error && <span className="edit_required">{error}</span>)}
    </div>
  )
}

UpdateGeoSelect.defaultProps = {
  input: undefined,
  options: [],
  onChange: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
}
UpdateGeoSelect.propTypes = {
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

export default UpdateGeoSelect
