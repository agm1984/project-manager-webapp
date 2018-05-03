import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const FormShowEmail = (props) => {
  const { name, value } = props
  return (
    <div className="form_row">
      <div className="form_row-label">{name}</div>
      <div className="form_row-item">
        <a className="form_link" href={`mailto:${value}`}>
          {value}
        </a>
      </div>
    </div>
  )
}

FormShowEmail.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default FormShowEmail
