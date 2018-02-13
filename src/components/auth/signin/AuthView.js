import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import AuthForm from './AuthForm'
import AuthRegisterLink from './AuthRegisterLink'
import Footer from '../../Footer'
import { handleSignInSuccess } from './auth_actions'
import SIGN_IN_MUTATION from './auth_mutations'

class SignInView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serverErrors: [],
    }
    this.handleLoginAttempt = this.handleLoginAttempt.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  /**
   * When the user presses the Sign In Button, their credentials are passed
   * to the server and a JWT Token is awarded if the credentials are valid.
   * @param {Object} props Sign In Form submitted fields
   */
  async handleLoginAttempt(props) {
    const { person_email, person_password } = props
    try {
      const res = await this.props.mutate({
        variables: { person_email, person_password },
      })
      const token = res.data.login
      return this.props.handleSignInSuccess(token)
    } catch (e) {
      return this.setState({ serverErrors: [e.graphQLErrors[0].message] })
    }
  }

  render() {
    return (
      <div id="auth_wrapper">
        <div id="auth_container">
          <AuthForm
            onSignInSubmit={props => this.handleLoginAttempt(props)}
            maybeShowErrors={this.state.serverErrors}
          />
          <AuthRegisterLink />
        </div>
        <Footer />
      </div>
    )
  }
}

SignInView.propTypes = {
  mutate: PropTypes.func.isRequired,
  handleSignInSuccess: PropTypes.func.isRequired,
}

export default compose(
  connect(null, { handleSignInSuccess }),
  graphql(SIGN_IN_MUTATION),
)(SignInView)
