import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleSignOut } from './signin/auth_actions'

/**
 * For components that require a Person to be signed in, this HOC can be used.
 * @param {Function} ComposedComponent The React Component that requires auth
 */
const requireAuth = (ComposedComponent) => {
  class Authentication extends Component {
    static defaultProps = {
      isAuthenticated: undefined,
    }
    static propTypes = {
      isAuthenticated: PropTypes.bool,
      handleSignOut: PropTypes.func.isRequired,
    }

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        return this.props.handleSignOut('/')
      }
      return null
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        return this.props.handleSignOut('/')
      }
      return null
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    const { isAuthenticated } = state.auth
    return {
      isAuthenticated,
    }
  }
  return connect(mapStateToProps, { handleSignOut })(Authentication)
}

export default requireAuth
