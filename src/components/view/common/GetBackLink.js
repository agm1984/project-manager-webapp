import React from 'react'
import PropTypes from 'prop-types'

const GetBackLink = (props) => {
  const { onLinkPress } = props
  return (
    <div className="view_back">
      <button
        className="view_back-link"
        onClick={onLinkPress}
      >
        Back
      </button>
    </div>
  )
}

GetBackLink.propTypes = {
  onLinkPress: PropTypes.func.isRequired,
}

export default GetBackLink
