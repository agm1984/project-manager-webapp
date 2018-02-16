import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'react-apollo'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import EnterName from './Step1_EnterName'
import EnterEmail from './Step2_EnterEmail'
import EnterLocation from './Step3_EnterLocation'
import EnterPassword from './Step4_EnterPassword'
import Done from './Step5_Done'
import { handleNextStep, handlePrevStep } from './reg_actions'

const RegisterPerson = (props) => {
  const { currentStep, handleNextStep, handlePrevStep } = props // eslint-disable-line no-shadow
  switch (currentStep) {
    case 'ENTER_NAME':
    default:
      return (
        <EnterName onComplete={() => handleNextStep('ENTER_EMAIL')} />
      )
    case 'ENTER_EMAIL':
      return (
        <EnterEmail
          onComplete={() => handleNextStep('ENTER_LOCATION')}
          onBack={() => handlePrevStep('ENTER_NAME')}
        />
      )
    case 'ENTER_LOCATION':
      return (
        <EnterLocation
          onComplete={() => handleNextStep('ENTER_PASSWORD')}
          onBack={() => handlePrevStep('ENTER_EMAIL')}
        />
      )
    case 'ENTER_PASSWORD':
      return (
        <EnterPassword />
      )
    case 'DONE':
      return (
        <Done />
      )
  }
}

RegisterPerson.defaultProps = {
  currentStep: null,
}
RegisterPerson.propTypes = {
  currentStep: PropTypes.string,
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
}

const mapStateToProps = ({ reg: { currentStep } }) => ({ currentStep })
export default compose(
  connect(mapStateToProps, { handleNextStep, handlePrevStep }),
  reduxForm({ form: 'RegistrationForm' }),
)(RegisterPerson)
