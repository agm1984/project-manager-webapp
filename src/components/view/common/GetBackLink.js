import React from 'react'
import PropTypes from 'prop-types'
import './View.css'

const GetBackLink = (props) => {
  const { onLinkPress } = props
  return (
    <div id="view_back">
      <button
        id="view_back-link"
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
