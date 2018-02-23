import React from 'react'
import PropTypes from 'prop-types'
import './View.css'

const GetErrors = (props) => {
  const { errors } = props
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
    <div id="view_error" style={{ marginTop: '3.2rem', width: '100rem' }}>
      <div id="view_error-header">
        THE FOLLOWING ERRORS OCCURRED:
      </div>
      <ul>
        {errors.map(e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  )
}

GetErrors.defaultProps = {
  errors: undefined,
}
GetErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default GetErrors
