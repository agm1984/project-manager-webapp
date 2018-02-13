import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import RegSection from './common/RegSection'
import RegErrors from './common/RegErrors'
import RegInput from './common/RegInput'
import RegSignInLink from './common/RegSignInLink'
import Footer from '../../Footer'
import validate from './reg_validator'

const EnterName = (props) => {
  const {
    onComplete, pristine, submitting, valid,
  } = props
  return (
    <div id="auth_wrapper">
      <div id="auth_container">
        <RegSection heading="NAME" >
          <RegErrors errors={[]} />
          <Field
            component={RegInput}
            type="text"
            name="person_givenName"
            placeholder="First Name"
          />
          <Field
            component={RegInput}
            type="text"
            name="person_familyName"
            placeholder="Last Name"
          />
          <div className="auth_signin_button-container">
            <button
              disabled={pristine || submitting || !valid}
              className="auth_signin_button-button"
              onClick={onComplete}
            >
              NEXT STEP
            </button>
          </div>
        </RegSection>
        <RegSignInLink />
      </div>
      <Footer />
    </div>
  )
}

EnterName.propTypes = {
  onComplete: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default reduxForm({
  validate,
  form: 'RegistrationForm',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(EnterName)
