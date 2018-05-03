import React from 'react'
import PropTypes from 'prop-types'
import './Common.css'

const ServerErrors = (props) => {
  const { errors, style } = props
  if (!errors) {
    return null
  }
  if (!Array.isArray(errors)) {
    return null
  }
  if (errors && !errors.length) {
    return null
  }
  return (
    <div id="server_errors" style={style}>
      <div id="server_errors-header">
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
  style: PropTypes.objectOf(PropTypes.any),
}

export default ServerErrors
