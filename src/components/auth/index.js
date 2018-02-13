import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initApp, handleSignOut } from './signin/auth_actions'

class AuthContainer extends Component {
  /**
   * When root-level components load initially, the App Initialization Action Creator
   * is called. The user will be signed out if he/she is not authenticated.
   */
  componentWillMount() {
    this.props.initApp()
    if (!this.props.isAuthenticated && this.props.isSigningIn === false) {
      this.props.handleSignOut()
    }
  }

  /**
   * When this root-level Component is updated, the user's auth status is checked.
   * The user will be signed out if he/she is not authenticated any more.
   * @param {Object} nextProps `this.props` after the next update cycle
   */
  componentWillUpdate(nextProps) {
    if (!nextProps.isAuthenticated && nextProps.isSigningIn === false) {
      this.props.handleSignOut()
    }
  }

  render() {
    const {
      isAuthenticated, isSigningIn, children,
    } = this.props
    switch (true) {
      case (!isAuthenticated && isSigningIn === false): {
        return null
      }
      case (isAuthenticated && isSigningIn === false):
        return {
          ...children,
        }
      default:
        return null
    }
  }
}

AuthContainer.defaultProps = {
  isAuthenticated: null,
  isSigningIn: null,
}
AuthContainer.propTypes = {
  initApp: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isSigningIn: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

const mapStateToProps = ({ auth: { isAuthenticated, isSigningIn } }) => ({
  isAuthenticated, isSigningIn,
})
export default connect(mapStateToProps, {
  initApp, handleSignOut,
})(AuthContainer)
