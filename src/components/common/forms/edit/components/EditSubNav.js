import React from 'react'
import PropTypes from 'prop-types'
import './Edit.css'

const EditSubNav = (props) => {
  const {
    type, hasRequiredFields, recordLabel, recordStatus,
  } = props
  let labelToDisplay = recordLabel
  if (recordLabel && recordLabel.length > 50) {
    labelToDisplay = `${recordLabel.substr(0, 50)}...`
  }
  if (hasRequiredFields) {
    return (
      <div id="edit_subnav">
        <div id="edit_subnav_record">
          EDIT {type.toUpperCase()}
          <span id="edit_subnav_record-label">
            {labelToDisplay}
          </span>
          -
          <span id="edit_subnav_record-status">
            {recordStatus}
          </span>
        </div>
        <div id="edit_subnav-right-side">
          <span>*</span>
          Denotes a Required Field
        </div>
      </div>
    )
  }
  return (
    <div id="edit_subnav">
      <div id="edit_subnav_record">
        EDIT {type.toUpperCase()}
        <span id="edit_subnav_record-label">
          {labelToDisplay}
        </span>
        -
        <span id="edit_subnav_record-status">
          {recordStatus}
        </span>
      </div>
    </div>
  )
}

EditSubNav.defaultProps = {
  hasRequiredFields: undefined,
}
EditSubNav.propTypes = {
  type: PropTypes.string.isRequired,
  hasRequiredFields: PropTypes.bool,
  recordLabel: PropTypes.string.isRequired,
  recordStatus: PropTypes.string.isRequired,
}

export default EditSubNav
