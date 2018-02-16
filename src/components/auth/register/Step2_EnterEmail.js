import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import RegSection from './common/RegSection'
import RegErrors from './common/RegErrors'
import RegInput from './common/RegInput'
import RegBackLink from './common/RegBackLink'
import validate from './reg_validator'
import './Register.css'

const EnterEmail = (props) => {
  const {
    onComplete, onBack, pristine, submitting, valid,
  } = props
  return (
    <div id="reg_wrapper">
      <div id="reg_container">
        <RegSection heading="EMAIL">
          <RegErrors errors={[]} />
          <Field
            component={RegInput}
            type="text"
            name="person_email"
            placeholder="Email"
          />
          <div id="reg_button-container">
            <button
              disabled={pristine || submitting || !valid}
              id="reg_button"
              onClick={onComplete}
            >
              NEXT STEP
            </button>
          </div>
        </RegSection>
        <RegBackLink onBack={onBack} />
      </div>
    </div>
  )
}

EnterEmail.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default reduxForm({
  validate,
  form: 'RegistrationForm',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(EnterEmail)
