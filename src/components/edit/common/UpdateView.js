import React from 'react'
import PropTypes from 'prop-types'
import './Edit.css'

const UpdateView = (props) => {
  const { children } = props
  return (
    <div id="edit-wrapper">
      <div id="edit-container">
        {children}
      </div>
    </div>
  )
}

UpdateView.defaultProps = {
  children: undefined,
}
UpdateView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default UpdateView
