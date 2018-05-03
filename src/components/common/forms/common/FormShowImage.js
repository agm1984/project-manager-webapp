import React from 'react'
import PropTypes from 'prop-types'
import noPhoto from '../../common/images/noPhoto.png'
import './Form.css'

const FormShowImage = (props) => {
  const { name, value } = props
  if (!name) {
    return (
      <div id="form_avatar-container">
        <img
          id="form_avatar-photo"
          src={(!value) ? noPhoto : value}
          alt="No Avatar to display"
        />
      </div>
    )
  }
  return (
    <div className="view_row">
      <div className="view_row-label">{name}</div>
      <div className="view_row-item">
        <img
          id="nav_user-avatar"
          src={value}
          alt="User Avatar"
        />
      </div>
    </div>
  )
}

FormShowImage.defaultProps = {
  name: undefined,
}
FormShowImage.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
}

export default FormShowImage
