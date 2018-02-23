import React from 'react'
import PropTypes from 'prop-types'
import './Create.css'

const CreateSection = (props) => {
  const { isTop, heading, children } = props
  const sectionPlacement = isTop
    ? 'create_section create_section-margin-lg'
    : 'create_section create_section-margin-sm'
  return (
    <div className={sectionPlacement}>
      <div className="create_section_heading">
        {heading}
      </div>
      {children}
    </div>
  )
}

CreateSection.defaultProps = {
  isTop: undefined,
}
CreateSection.propTypes = {
  isTop: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default CreateSection
