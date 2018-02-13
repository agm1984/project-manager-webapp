import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import handleGetPersonAvatar from './nav_actions'
import { handleSignOut } from '../auth/signin/auth_actions'
import logo from './images/Mackintosh-logo.png'
import signout from './images/signout.png'

class NavContainer extends Component {
  /**
   * When the Nav Container loads, the currently signed in user's profile
   * picture should be acquired from the server.
   */
  componentDidMount() {
    return this.props.handleGetPersonAvatar()
  }

  /**
   * To handle the case when a user updates his/her profile picture while
   * signed in, the profile picture is acquired every page reload.
   * This is moderately wasteful and could be cleaned up further.
   */
  componentWillUpdate() {
    return this.props.handleGetPersonAvatar()
  }

  /**
   * When the user presses the Sign Out Button in the Nav Container,
   * he/she should be signed out.
   * @param {Synthetic Event} e React-controlled Synthetic Event
   */
  handleSignOutClick(e) {
    e.preventDefault()
    return this.props.handleSignOut()
  }

  render() {
    const Spacer = () => (
      <div className="nav_menu-spacer">|</div>
    )
    return (
      <div id="nav">
        <nav id="nav_elements">
          <div id="nav_logo-container">
            <div>
              <img
                id="nav_logo"
                src={logo}
                alt="Mackintosh Logo"
              />
            </div>
          </div>
          <div id="nav_menu">
            <div className="nav_menu-item">
              <NavLink
                to="/admin/dashboard"
                className="nav_link"
                activeClassName="nav_link-active"
              >
                DASHBOARD
              </NavLink>
            </div>
            <Spacer />
            <div className="nav_menu-item">
              <NavLink
                to="/admin/people"
                className="nav_link"
                activeClassName="nav_link nav_link-active"
              >
                PEOPLE
              </NavLink>
            </div>
            <Spacer />
            <div className="nav_menu-item">
              <NavLink
                to="/admin/articles"
                className="nav_link"
                activeClassName="nav_link nav_link-active"
              >
                ARTICLES
              </NavLink>
            </div>
            <Spacer />
            <div className="nav_menu-item">
              <NavLink
                to="/admin/devtools"
                className="nav_link"
                activeClassName="nav_link-active"
              >
                DEV TOOLS
              </NavLink>
            </div>
          </div>
          <div id="nav_user">
            <NavLink
              to="/admin/profile"
              className="nav_user-signout"
            >
              {this.props.person_avatar && (
                <img
                  id="nav_user-avatar"
                  src={this.props.person_avatar}
                  alt="User Avatar"
                />
              )}
            </NavLink>
            <NavLink
              to="/admin/signin"
              className="nav_user-signout"
              onClick={e => this.handleSignOutClick(e)}
            >
              <img
                className="nav_user-signout"
                src={signout}
                title="Sign Out"
                alt="Signout"
              />
            </NavLink>
          </div>
        </nav>
      </div>
    )
  }
}

NavContainer.propTypes = {
  router: PropTypes.shape({ // eslint-disable-line
    location: PropTypes.object,
  }).isRequired,
  handleGetPersonAvatar: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  person_avatar: PropTypes.string.isRequired,
}

/**
 * Router is required to trigger refreshes when inter-page navigation occurs.
 * `person_avatar` is required for the signed in user's profile picture.
 * @param {Object} state Redux App State
 */
const mapStateToProps = (state) => {
  const { router, nav } = state
  const { person_avatar } = nav
  return {
    router,
    person_avatar,
  }
}

export default connect(mapStateToProps, {
  handleGetPersonAvatar, handleSignOut,
})(NavContainer)
