import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import AuthErrors from './AuthErrors'
import logo from './adam-logo.png'
import infoIcon from '../images/info.png'
import AuthInput from './AuthInput'
import validate from './auth_validator'

const AuthForm = (props) => {
  const {
    handleSubmit, onSignInSubmit, maybeShowErrors, pristine, submitting,
  } = props
  return (
    <form
      id="auth_form"
      onSubmit={handleSubmit(onSignInSubmit)}
      autoComplete="off"
    >
      <div id="auth_logo-container">
        <img
          id="auth_logo"
          src={logo}
          alt="Adam Mackintosh Logo"
        />
      </div>
      <div id="auth_heading">
        Sign in to the Mackintosh Portfolio Admin Area
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
      <div className="auth_signin_button-container">
        <button
          disabled={pristine || submitting}
          className="auth_signin_button-button"
          type="submit"
        >
          SIGN IN
        </button>
      </div>
      <div
        id="auth_heading"
        style={{
          position: 'relative',
          marginBottom: 0,
          backgroundColor: 'rgba(210, 227, 243, 0.5)',
          border: '1px solid #88ABC7',
          color: 'black',
        }}
      >
        <img
          style={{
            position: 'absolute',
            height: '30px',
            width: '30px',
            top: '7px',
            left: '10px',
            opacity: 0.75,
          }}
          src={infoIcon}
          alt="Info"
        />
        To skip registration, sign in with credentials:<br />
        E: <b>demo@demo.com</b> / P: <b>demodemo</b>
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
