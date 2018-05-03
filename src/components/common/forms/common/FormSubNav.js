import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const FormSubNav = (props) => {
  const {
    action, type, hasRequiredFields, recordLabel, recordStatus,
    onClickEdit,
  } = props
  switch (action.toLowerCase()) {
    // CREATE FORM
    case 'create': {
      if (hasRequiredFields) {
        return (
          <div id="form_subnav">
            <div id="form_subnav_record">
              ADD A NEW {type.toUpperCase()}
            </div>
            <div id="form_subnav-right-side">
              <span>*</span>
              Denotes a Required Field
            </div>
          </div>
        )
      }
      return (
        <div id="form_subnav_record">
          <div id="form_subnav_record">
            ADD A NEW {type.toUpperCase()}
          </div>
          <div id="form_subnav-right-side" />
        </div>
      )
    }

    // EDIT FORM
    case 'edit': {
      let labelToDisplay = recordLabel
      if (recordLabel.length > 40) {
        labelToDisplay = `${recordLabel.substr(0, 40)}...`
      }
      if (hasRequiredFields) {
        return (
          <div id="form_subnav">
            <div id="form_subnav_record">
              EDIT {type.toUpperCase()}
              <span id="form_subnav_record-label">
                {labelToDisplay}
              </span>
              -
              <span id="form_subnav_record-status">
                {recordStatus}
              </span>
            </div>
            <div id="form_subnav-right-side">
              <span>*</span>
              Denotes a Required Field
            </div>
          </div>
        )
      }
      return (
        <div id="form_subnav">
          <div id="form_subnav_record">
            EDIT {type.toUpperCase()}
            <span id="form_subnav_record-label">
              {labelToDisplay}
            </span>
            -
            <span id="form_subnav_record-status">
              {recordStatus}
            </span>
          </div>
        </div>
      )
    }

    // VIEW FORM
    case 'view': {
      let labelToDisplay = recordLabel
      if (recordLabel.length > 40) {
        labelToDisplay = `${recordLabel.substr(0, 40)}...`
      }
      return (
        <div id="form_subnav">
          <div id="form_subnav_record">
            VIEW {type.toUpperCase()}
            <span id="form_subnav_record-label">
              {labelToDisplay}
            </span>
            -
            <span id="form_subnav_record-status">
              {recordStatus}
            </span>
          </div>
          <div id="form_subnav_edit">
            <button
              id="form_subnav_edit-button"
              onClick={onClickEdit}
            >
              EDIT
            </button>
          </div>
        </div>
      )
    }
    default:
      return (
        <div id="form_subnav">
          <div id="form_subnav_record">
            PROFILE
          </div>
          <div id="form_subnav_edit">
            <button
              id="form_subnav_edit-button"
              onClick={onClickEdit}
            >
              EDIT
            </button>
          </div>
        </div>
      )
  }
}

FormSubNav.defaultProps = {
  hasRequiredFields: undefined,
  recordLabel: undefined,
  recordStatus: undefined,
  onClickEdit: undefined,
}
FormSubNav.propTypes = {
  action: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hasRequiredFields: PropTypes.bool,
  recordLabel: PropTypes.string,
  recordStatus: PropTypes.string,
  onClickEdit: PropTypes.func,
}

export default FormSubNav
