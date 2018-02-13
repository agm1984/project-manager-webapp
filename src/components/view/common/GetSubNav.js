import React from 'react'
import PropTypes from 'prop-types'

const GetSubNav = (props) => {
  const {
    type, recordLabel, recordStatus, onClickEdit,
  } = props
  return (
    <div className="edit_subnav">
      <div className="edit_subnav-title">
        VIEW {type.toUpperCase()}
        <span className="subnav_title-bold">
          {recordLabel}
        </span>
        -
        <span className="subnav_active">
          {recordStatus}
        </span>
      </div>
      <div className="edit_subnav-right-side">
        <button
          className="subnav_deactivate"
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
