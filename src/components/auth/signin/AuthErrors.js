import React from 'react'
import PropTypes from 'prop-types'

const ServerErrors = (props) => {
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

ServerErrors.defaultProps = {
  errors: undefined,
  style: undefined,
}
ServerErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.shape({ marginTop: PropTypes.any }),
}

export default ServerErrors
