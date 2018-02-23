import React from 'react'
import PropTypes from 'prop-types'
import './Create.css'

const CreateErrors = (props) => {
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
    <div className="create_error" style={{ marginTop: '3.2rem', width: '100rem' }}>
      <div className="create_error-header">
        THE FOLLOWING ERRORS OCCURRED:
      </div>
      <ul>
        {errors.map(e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  )
}

CreateErrors.defaultProps = {
  errors: undefined,
}
CreateErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default CreateErrors
