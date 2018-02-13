import React from 'react'
import PropTypes from 'prop-types'

const UpdateSection = (props) => {
  const { isTop, heading, children } = props
  const sectionPlacement = isTop
    ? 'edit_container row-margin-lg'
    : 'edit_container row-margin-sm'
  return (
    <div className={sectionPlacement}>
      <div className="edit_heading">
        {heading}
      </div>
      {children}
    </div>
  )
}

UpdateSection.defaultProps = {
  isTop: undefined,
}
UpdateSection.propTypes = {
  isTop: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default UpdateSection
