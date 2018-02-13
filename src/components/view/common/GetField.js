import React from 'react'
import PropTypes from 'prop-types'

const GetField = (props) => {
  const { name, value } = props
  if (!name) {
    return (
      <div className="view_row">
        <div className="view_row-label" />
        <div className="view_row-item">{value}</div>
      </div>
    )
  }
  return (
    <div className="view_row">
      <div className="view_row-label">{name}</div>
      <div className="view_row-item">{value}</div>
    </div>
  )
}

GetField.defaultProps = {
  name: undefined,
}
GetField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
}

export default GetField
