import React from 'react'
import PropTypes from 'prop-types'
import './View.css'

const GetSection = (props) => {
  const { isTop, heading, children } = props
  const sectionPlacement = isTop
    ? 'view_section view_section-margin-lg'
    : 'view_section view_section-margin-sm'
  return (
    <div className={sectionPlacement}>
      <div className="view_section_heading">
        {heading}
      </div>
      {children}
    </div>
  )
}

GetSection.defaultProps = {
  isTop: undefined,
}
GetSection.propTypes = {
  isTop: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default GetSection
