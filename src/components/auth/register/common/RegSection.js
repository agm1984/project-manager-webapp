import React from 'react'
import PropTypes from 'prop-types'
import OmniLogo from '../../images/omniLogo'
import '../Register.css'

const RegSection = (props) => {
  const { heading, children } = props
  return (
    <div>
      <OmniLogo height={330} />
      <div id="reg_mainHeading">
        Register for your Omniart Creative account
      </div>
      <div className="reg_heading">
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
