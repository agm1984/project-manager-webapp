import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

const FormView = (props) => {
  const { children } = props
  return (
    <div id="form-wrapper">
      <div id="form-container">
        {children}
      </div>
    </div>
  )
}

FormView.defaultProps = {
  children: undefined,
}
FormView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default FormView
