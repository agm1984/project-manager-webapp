import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Geosuggest from 'react-geosuggest'
// Redux-form stuff
// https://github.com/ubilabs/react-geosuggest/issues/275

class RegGeoSuggest extends Component {
  render() {
    const {
      input, name, placeholder, meta,
    } = this.props
    const { touched, error } = meta
    const maybeHasValue = (input.value)
      ? 'edit_filled'
      : 'edit_empty'
    const maybeHasError = (touched && error)
      ? 'form-text-input error'
      : `form-text-input normal ${maybeHasValue}`
    return (
      <div className="edit_rowcontainer">
        <div className="row-md">
          <Geosuggest
            ref={el => this._geoSuggest = el} // eslint-disable-line
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
        {touched && (error && <span className="auth_field_error">{error}</span>)}
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
