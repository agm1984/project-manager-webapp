import React from 'react'
import PropTypes from 'prop-types'

const CreateSubNav = (props) => {
  const { type, hasRequiredFields } = props
  if (hasRequiredFields) {
    return (
      <div className="edit_subnav">
        <div className="edit_subnav-title">
          ADD A NEW {type.toUpperCase()}
        </div>
        <div className="edit_subnav-right-side">
          <span>*</span>
          Denotes a Required Field
        </div>
      </div>
    )
  }
  return (
    <div className="edit_subnav">
      <div className="edit_subnav-title">
        ADD A NEW {type.toUpperCase()}
      </div>
      <div className="edit_subnav-right-side" />
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
