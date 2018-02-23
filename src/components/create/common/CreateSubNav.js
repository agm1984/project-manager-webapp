import React from 'react'
import PropTypes from 'prop-types'
import './Create.css'

const CreateSubNav = (props) => {
  const { type, hasRequiredFields } = props
  if (hasRequiredFields) {
    return (
      <div id="create_subnav">
        <div id="create_subnav-title">
          ADD A NEW {type.toUpperCase()}
        </div>
        <div id="create_subnav-right-side">
          <span>*</span>
          Denotes a Required Field
        </div>
      </div>
    )
  }
  return (
    <div id="create_subnav">
      <div id="create_subnav-title">
        ADD A NEW {type.toUpperCase()}
      </div>
      <div id="create_subnav-right-side" />
    </div>
  )
}

CreateSubNav.defaultProps = {
  hasRequiredFields: undefined,
}
CreateSubNav.propTypes = {
  type: PropTypes.string.isRequired,
  hasRequiredFields: PropTypes.bool,
}

export default CreateSubNav
