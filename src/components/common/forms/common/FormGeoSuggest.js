import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Geosuggest from 'react-geosuggest'
import './Form.css'

// Redux-form stuff
// https://github.com/ubilabs/react-geosuggest/issues/275

class FormGeoSuggest extends Component {
  render() {
    const {
      input, meta, name, label, required, placeholder,
    } = this.props
    const { touched, error } = meta
    const maybeHasValue = (input.value)
      ? 'form_filled'
      : 'form_empty'
    const maybeHasError = (touched && error)
      ? 'form_input form_state-error'
      : `form_input form_state-normal ${maybeHasValue}`
    return (
      <div className="form_row-container">
        <label className="form_row" htmlFor={name}>
          <div className="form_row-label">
            {label}
            {required && <span className="form_asterisk">*</span>}
          </div>
          <div className="form_row-item">
            <Geosuggest
              ref={(el) => {
                this._geoSuggest = el
              }}
              placeholder={placeholder}
              inputClassName={maybeHasError}
              name={name}
              initialValue={input.value}
              onSuggestSelect={(suggest) => {
                if (!suggest) {
                  return input.onChange(null)
                }
                return input.onChange(suggest.label)
              }}
              {...input}
            />
          </div>
        </label>
        {touched && (error && <span className="form_required">{error}</span>)}
      </div>
    )
  }
}

FormGeoSuggest.defaultProps = {
  input: undefined,
  options: [],
  onChange: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
}
FormGeoSuggest.propTypes = {
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

export default FormGeoSuggest
