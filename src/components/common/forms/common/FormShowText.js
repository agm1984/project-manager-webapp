import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const FormShowText = (props) => {
  const { name, value } = props
  if (!name) {
    return (
      <div className="form_row">
        <div className="form_row-label" />
        <div className="form_row-item">{value}</div>
      </div>
    )
  }
  return (
    <div className="form_row">
      <div className="form_row-label">{name}</div>
      <div className="form_row-item">{value}</div>
    </div>
  )
}

FormShowText.defaultProps = {
  name: undefined,
}
FormShowText.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
}

export default FormShowText
