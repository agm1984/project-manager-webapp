import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import RegSection from './common/RegSection'
import RegErrors from './common/RegErrors'
import RegInput from './common/RegInput'
import RegBackLink from './common/RegBackLink'
import Footer from '../../Footer'
import { handlePrevStep, handleCompletion } from './reg_actions'
import validate from './reg_validator'
import REGISTER_MUTATION from './reg_mutations'

class EnterPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serverErrors: [],
    }
    this.handleRegSubmit = this.handleRegSubmit.bind(this)
  }
  async handleRegSubmit(props) {
    try {
      const res = await this.props.mutate({
        variables: {
          ...props,
          person_status: 'Active',
          person_memberType: 'Free',
        },
      })
      const { token } = res.data.register
      return this.props.handleCompletion(token)
    } catch (e) {
      return this.setState({ serverErrors: [e.graphQLErrors[0].message] })
    }
  }
  render() {
    const {
      pristine, submitting, valid, handleSubmit, handlePrevStep, // eslint-disable-line no-shadow
    } = this.props
    return (
      <form
        id="reg_form"
        onSubmit={handleSubmit(this.handleRegSubmit)}
      >
        <div id="auth_wrapper">
          <div id="auth_container">
            <RegSection heading="PASSWORD">
              <RegErrors errors={this.state.serverErrors} />
              <Field
                component={RegInput}
                type="password"
                name="person_password"
                placeholder="Password"
                passwordEntry
              />
              <Field
                component={RegInput}
                type="password"
                name="person_confirmPassword"
                placeholder="Confirm Password"
              />
              <div className="auth_signin_button-container">
                <button
                  disabled={pristine || submitting || !valid}
                  className="auth_signin_button-button"
                  type="submit"
                >
                  NEXT STEP
                </button>
              </div>
            </RegSection>
            <RegBackLink onBack={() => handlePrevStep('ENTER_LOCATION')} />
          </div>
          <Footer />
        </div>
      </form>
    )
  }
}

EnterPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
  handleCompletion: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ reg: { currentStep } }) => ({
  currentStep,
})
export default compose(
  connect(mapStateToProps, { handlePrevStep, handleCompletion }),
  graphql(REGISTER_MUTATION),
  reduxForm({
    validate,
    form: 'RegistrationForm',
    enableReinitialize: true,
    destroyOnUnmount: false,
  }),
)(EnterPassword)
