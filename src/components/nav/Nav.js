import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import UserDetails from './UserDetails'
import handleGetPersonAvatar from './nav_actions'
import { handleSignOut } from '../auth/signin/auth_actions'
import signout from './images/signout.png'
import './Nav.css'

/**
 * This utility function allows function calls to be debounced.
 * @param {Function} func Function that requires debouncing
 * @param {Number} wait Wait time in milliseconds between successive invocations
 */
const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

class NavContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPositionY: 0,
    }
  }
  /**
   * When the Nav Container loads, the currently signed in user's profile
   * picture should be acquired from the server.
   */
  componentDidMount() {
    window.addEventListener('scroll', debounce(this.handleScroll, 16))
    return this.props.handleGetPersonAvatar()
  }

  /**
   * To handle the case when a user updates his/her profile picture while
   * signed in, the profile picture is acquired every page reload.
   * This is moderately wasteful and could be cleaned up further.
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.handleScroll, 16))
    return this.props.handleGetPersonAvatar()
  }

  /**
   * When the user presses the Sign Out Button in the Nav Container,
   * he/she should be signed out.
   * @param {Synthetic Event} e React-controlled Synthetic Event
   */
  handleSignOutClick = (e) => {
    e.preventDefault()
    return this.props.handleSignOut()
  }

  /**
   * When the user scrolls down, the Nav Bar should transition from its
   * Top State to Scrolling State. If the view is scrolled more than zero,
   * Scrolling State and additional CSS styling will be enabled.
   */
  handleScroll = () => {
    const scrollPositionY = +window.scrollY
    this.setState({ scrollPositionY })
  }

  render() {
    const Spacer = () => (
      <div className="nav_menu-spacer">|</div>
    )
    const isScrolling = !!this.state.scrollPositionY
    return (
      <div className={(isScrolling) ? 'nav isScrolling' : 'nav'}>
        <nav id="nav_elements">
          <div id="nav_left-container">
            <NavLink
              to="/admin/profile"
              style={{ textDecoration: 'none' }}
            >
              <UserDetails isScrolling={isScrolling} />
            </NavLink>
          </div>
          <div id="nav_menu">
            <div className="nav_menu-item">
              <NavLink
                to="/admin/board"
                className="nav_link"
                activeClassName={(isScrolling) ? 'nav_link-active isScrolling' : 'nav_link-active'}
              >
                BOARD
              </NavLink>
            </div>
            <Spacer />
            <div className="nav_menu-item">
              <NavLink
                to="/admin/clients"
                className="nav_link"
                activeClassName={(isScrolling) ? 'nav_link-active isScrolling' : 'nav_link-active'}
              >
                CLIENTS
              </NavLink>
            </div>
            <Spacer />
            <div className="nav_menu-item">
              <NavLink
                to="/admin/leads"
                className="nav_link"
                activeClassName="nav_link-active"
              >
                LEADS
              </NavLink>
            </div>
            <Spacer />
            <div className="nav_menu-item">
              <NavLink
                to="/admin/articles"
                className="nav_link"
                activeClassName="nav_link-active"
              >
                ARTICLES
              </NavLink>
            </div>
          </div>
          <div id="nav_user">
            <NavLink
              to="/signin"
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
