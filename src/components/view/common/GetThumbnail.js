import React from 'react'
import PropTypes from 'prop-types'
import noPhoto from '../images/noPhoto.png'

const GetThumbnail = (props) => {
  const { name, value } = props
  if (!name) {
    return (
      <div id="view_avatar-container">
        <img
          id="view_avatar-photo"
          src={(!value) ? noPhoto : value}
          alt="Avatar"
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

GetThumbnail.defaultProps = {
  name: undefined,
}
GetThumbnail.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
}

export default GetThumbnail
