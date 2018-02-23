import React from 'react'
import PropTypes from 'prop-types'
import './View.css'

const GetSubNav = (props) => {
  const {
    type, recordLabel, recordStatus, onClickEdit,
  } = props
  return (
    <div id="view_subnav">
      <div id="view_subnav_record">
        VIEW {type.toUpperCase()}
        <span id="view_subnav_record-label">
          {recordLabel}
        </span>
        -
        <span id="view_subnav_record-status">
          {recordStatus}
        </span>
      </div>
      <div id="view_subnav_edit">
        <button
          id="view_subnav_edit-button"
          onClick={onClickEdit}
        >
          EDIT
        </button>
      </div>
    </div>
  )
}

GetSubNav.propTypes = {
  type: PropTypes.string.isRequired,
  recordLabel: PropTypes.string.isRequired,
  recordStatus: PropTypes.string.isRequired,
  onClickEdit: PropTypes.func.isRequired,
}

export default GetSubNav
