import React from 'react'
import PropTypes from 'prop-types'

const GetSection = (props) => {
  const { isTop, heading, children } = props
  const sectionPlacement = isTop
    ? 'view_container row-margin-lg'
    : 'view_container row-margin-sm'
  return (
    <div className={sectionPlacement}>
      <div className="view_heading">
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
