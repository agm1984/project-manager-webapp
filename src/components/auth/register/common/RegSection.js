import React from 'react'
import PropTypes from 'prop-types'
import OmniLogo from '../../images/omniLogo'
import '../Register.css'

/**
 * This section component displays a heading that supports two sizes: normal and big.
 * If `big` prop (Boolean) is omitted, the heading will be normal size.
 * @param {Object} props Component input props
 */
const RegSection = (props) => {
  const { heading, children, big } = props
  return (
    <div>
      <OmniLogo height={330} />
      {(!big) && (
        <div id="reg_mainHeading">
          Register for your Omniart Creative account
        </div>
      )}
      <div className={(!big) ? 'reg_heading' : 'reg_heading-big'}>
        {heading}
      </div>
      {children}
    </div>
  )
}

RegSection.defaultProps = {
  big: undefined,
}
RegSection.propTypes = {
  big: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default RegSection
