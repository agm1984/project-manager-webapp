import React from 'react'
import PropTypes from 'prop-types'

const UpdateView = (props) => {
  const { children } = props
  return (
    <div className="page_container">
      <div className="edit_wrapper">
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
