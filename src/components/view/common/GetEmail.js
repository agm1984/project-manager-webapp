import React from 'react'
import PropTypes from 'prop-types'

const GetEmail = (props) => {
  const { name, value } = props
  return (
    <div className="view_row">
      <div className="view_row-label">{name}</div>
      <div className="view_row-item">
        <a className="view_link" href={`mailto:${value}`}>
          {value}
        </a>
      </div>
    </div>
  )
}

GetEmail.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default GetEmail
