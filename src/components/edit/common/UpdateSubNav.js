import React from 'react'
import PropTypes from 'prop-types'

const UpdateSubNav = (props) => {
  const {
    type, hasRequiredFields, recordLabel, recordStatus,
  } = props
  if (hasRequiredFields) {
    return (
      <div className="edit_subnav">
        <div className="edit_subnav-title">
          EDIT {type.toUpperCase()}
          <span className="subnav_title-bold">
            {recordLabel}
          </span>
          -
          <span className="subnav_active">
            {recordStatus}
          </span>
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
        EDIT {type.toUpperCase()}
      </div>
      <div className="edit_subnav-right-side">
        <span>*</span>
        Denotes a Required Field
      </div>
    </div>
  )
}

UpdateSubNav.defaultProps = {
  hasRequiredFields: undefined,
}
UpdateSubNav.propTypes = {
  type: PropTypes.string.isRequired,
  hasRequiredFields: PropTypes.bool,
  recordLabel: PropTypes.string.isRequired,
  recordStatus: PropTypes.string.isRequired,
}

export default UpdateSubNav
