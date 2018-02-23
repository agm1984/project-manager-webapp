import React from 'react'
import PropTypes from 'prop-types'
import './View.css'

const GetView = (props) => {
  const { children } = props
  return (
    <div id="view-wrapper">
      <div id="view-container">
        {children}
      </div>
    </div>
  )
}

GetView.defaultProps = {
  children: undefined,
}
GetView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default GetView
