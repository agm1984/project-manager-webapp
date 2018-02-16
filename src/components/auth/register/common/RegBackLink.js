import React from 'react'
import PropTypes from 'prop-types'
import '../Register.css'

/**
 * When Back is pressed, the user should be navigated back to the Sign In View.
 * @param {*} props The Component's props
 */
const RegBackLink = (props) => {
  const { onBack } = props
  return (
    <div id="reg_backLink-container">
      <button
        onClick={onBack}
        id="reg_backLink"
      >
        Back
      </button>
    </div>
  )
}

RegBackLink.propTypes = {
  onBack: PropTypes.func.isRequired,
}

export default RegBackLink
