import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import RegSection from './common/RegSection'
import RegErrors from './common/RegErrors'
import RegGeoSuggest from './common/RegGeoSuggest'
import RegBackLink from './common/RegBackLink'
import Footer from '../../Footer'
import validate from './reg_validator'

const EnterLocation = (props) => {
  const {
    onComplete, onBack, pristine, submitting, valid,
  } = props
  return (
    <div id="auth_wrapper">
      <div id="auth_container">
        <RegSection heading="LOCATION">
          <RegErrors errors={[]} />
          <Field
            component={RegGeoSuggest}
            type="text"
            name="person_location"
            placeholder="Location"
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
        <RegBackLink onBack={onBack} />
      </div>
      <Footer />
    </div>
  )
}

EnterLocation.propTypes = {
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
})(EnterLocation)
