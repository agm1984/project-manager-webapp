import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const FormSection = (props) => {
  const { isTop, heading, children } = props
  const sectionPlacement = isTop
    ? 'form_section form_section-margin-lg'
    : 'form_section form_section-margin-sm'
  return (
    <div className={sectionPlacement}>
      <div className="form_section_heading">
        {heading}
      </div>
      {children}
    </div>
  )
}

FormSection.defaultProps = {
  isTop: undefined,
}
FormSection.propTypes = {
  isTop: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default FormSection
