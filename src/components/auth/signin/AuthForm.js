import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import AuthErrors from './AuthErrors'
import OmniLogo from '../images/omniLogo'
import AuthInput from './AuthInput'
import validate from './auth_validator'
import './Signin.css'

const AuthForm = (props) => {
  const {
    handleSubmit, onSignInSubmit, maybeShowErrors, pristine, submitting,
  } = props
  return (
    <form
      onSubmit={handleSubmit(onSignInSubmit)}
      autoComplete="off"
    >
      <OmniLogo height={330} />
      <div id="signin_heading">
        Sign in to your administrative account
        <br />with your <strong>email</strong> and <strong>password</strong>
      </div>
      <AuthErrors errors={maybeShowErrors} />
      <Field
        component={AuthInput}
        type="text"
        name="person_email"
        placeholder="Email"
      />
      <Field
        component={AuthInput}
        type="password"
        name="person_password"
        placeholder="Password"
      />
      <div id="signin_button-container">
        <button
          disabled={pristine || submitting}
          id="signin_button"
          type="submit"
        >
          SIGN IN
        </button>
      </div>
    </form>
  )
}

AuthForm.defaultProps = {
  maybeShowErrors: [],
}
AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSignInSubmit: PropTypes.func.isRequired,
  maybeShowErrors: PropTypes.arrayOf(PropTypes.string),
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
}

export default reduxForm({ validate, form: 'SignInView' })(AuthForm)
