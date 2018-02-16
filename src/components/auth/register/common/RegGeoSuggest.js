import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Geosuggest from 'react-geosuggest'
import '../Register.css'

// Redux-form stuff
// https://github.com/ubilabs/react-geosuggest/issues/275

class RegGeoSuggest extends Component {
  render() {
    const {
      input, name, placeholder, meta,
    } = this.props
    const { touched, error } = meta
    const maybeHasValue = (input.value)
      ? 'reg_filled'
      : 'reg_empty'
    const maybeHasError = (touched && error)
      ? 'reg_input reg_input-error'
      : `reg_input reg_input-normal ${maybeHasValue}`
    return (
      <div className="reg_input-container">
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
        {touched && (error && <span className="reg_error_text">{error}</span>)}
      </div>
    )
  }
}

RegGeoSuggest.defaultProps = {
  input: undefined,
  options: [],
  onChange: undefined,
  name: undefined,
  meta: undefined,
}
RegGeoSuggest.propTypes = {
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
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

export default RegGeoSuggest
