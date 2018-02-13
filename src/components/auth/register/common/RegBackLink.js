import React from 'react'
import PropTypes from 'prop-types'

/**
 * When Back is pressed, the user should be navigated back to the Sign In View.
 * @param {*} props The Component's props
 */
const RegBackLink = (props) => {
  const { onBack } = props
  return (
    <div className="auth_register">
      <button
        onClick={onBack}
        className="auth_register-link"
        style={{ marginTop: '3.2rem', color: '#b3b3b3' }}
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
