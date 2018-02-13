import React from 'react'
import PropTypes from 'prop-types'

const GetView = (props) => {
  const { children } = props
  return (
    <div className="page_container">
      <div className="edit_wrapper">
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
