import React from 'react'
import PropTypes from 'prop-types'

const ListErrors = (props) => {
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
    <div id="list_error" style={{ marginTop: '3.2rem' }}>
      <div id="list_error-header">
        THE FOLLOWING ERRORS OCCURRED:
      </div>
      <ul>
        {errors.map(e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  )
}

ListErrors.defaultProps = {
  errors: undefined,
}
ListErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default ListErrors
