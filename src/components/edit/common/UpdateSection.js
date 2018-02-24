import React from 'react'
import PropTypes from 'prop-types'
import './Edit.css'

const UpdateSection = (props) => {
  const { isTop, heading, children } = props
  const sectionPlacement = isTop
    ? 'edit_section edit_section-margin-lg'
    : 'edit_section edit_section-margin-sm'
  return (
    <div className={sectionPlacement}>
      <div className="edit_section_heading">
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
