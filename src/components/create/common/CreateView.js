import React from 'react'
import PropTypes from 'prop-types'

const CreateView = (props) => {
  const { children } = props
  return (
    <div className="page_container">
      <div className="edit_wrapper">
        {children}
      </div>
    </div>
  )
}

CreateView.defaultProps = {
  children: undefined,
}
CreateView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default CreateView
