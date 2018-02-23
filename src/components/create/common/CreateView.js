import React from 'react'
import PropTypes from 'prop-types'
import './Create.css'

const CreateView = (props) => {
  const { children } = props
  return (
    <div id="create-wrapper">
      <div id="create-container">
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
