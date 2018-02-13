import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../images/adam-logo.png'

const RegSection = (props) => {
  const { heading, children } = props
  return (
    <div className="reg_form">
      <div id="auth_logo-container">
        <img
          id="auth_logo"
          src={logo}
          alt="Adam Mackintosh Logo"
        />
      </div>
      <div id="reg_heading">
        Mackintosh Portfolio Registration
      </div>
      <div className="edit_heading">
        {heading}
      </div>
      {children}
    </div>
  )
}

RegSection.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default RegSection
