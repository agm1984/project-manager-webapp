import React from 'react'
import PropTypes from 'prop-types'

const RegServerErrors = (props) => {
  const { errors, style } = props
  if (!errors) {
    return null
  }
  if (!Array.isArray(errors)) {
    return null
  }
  if (!errors.length) {
    return null
  }
  return (
    <div className="auth_error-container" style={style}>
      <div className="auth_error-header">
        THE FOLLOWING ERRORS OCCURRED:
      </div>
      <ul>
        {errors.map(e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  )
}

RegServerErrors.defaultProps = {
  errors: undefined,
  style: undefined,
}
RegServerErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.shape({ marginTop: PropTypes.any }),
}

export default RegServerErrors
