import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import OmniLogo from '../landing/images/omniLogo'
import noPhoto from './images/noPhoto.png'
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

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.handleScroll, 16))
    return window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
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
   * Scrolling State and additional CSS will be applied.
   */
  handleScroll = () => {
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }

  // TODO: Fix isScrolling: it needs to be a class method
  // to prevent re-rendering every scroll event due to setState.
  // See landing page implementation.
  render() {
    const person_avatar = (this.props.person)
      ? this.props.person.person_avatar
      : noPhoto
    const isScrolling = !!this.state.scrollPositionY
    console.log('SCROLLING', isScrolling)
    return (
      <div className={(isScrolling) ? 'nav isScrolling' : 'nav'}>
        <div id="nav_elements">
          <div id="nav_left-container">
            <NavLink
              to="/"
              style={{ textDecoration: 'none' }}
            >
              <OmniLogo height={55} />
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
            <div className="nav_menu-spacer">|</div>
            <div className="nav_menu-item">
              <NavLink
                to="/admin/clients"
                className="nav_link"
                activeClassName={(isScrolling) ? 'nav_link-active isScrolling' : 'nav_link-active'}
              >
                CLIENTS
              </NavLink>
            </div>
            <div className="nav_menu-spacer">|</div>
            <div className="nav_menu-item">
              <NavLink
                to="/admin/leads"
                className="nav_link"
                activeClassName={(isScrolling) ? 'nav_link-active isScrolling' : 'nav_link-active'}
              >
                LEADS
              </NavLink>
            </div>
            <div className="nav_menu-spacer">|</div>
            <div className="nav_menu-item">
              <NavLink
                to="/admin/articles"
                className="nav_link"
                activeClassName={(isScrolling) ? 'nav_link-active isScrolling' : 'nav_link-active'}
              >
                ARTICLES
              </NavLink>
            </div>
          </div>
          <div id="nav_user">
            {/* <div className="nav_user-item">
              <NavLink
                to="/admin/tasks"
                className="nav_link"
                activeClassName={(isScrolling) ? 'nav_link-active isScrolling' : 'nav_link-active'}
              >
                TASKS
              </NavLink>
            </div>
            <div className="nav_menu-spacer">|</div> */}
            <div className="nav_user-item">
              <NavLink
                to="/admin/people"
                className="nav_link"
                activeClassName={(isScrolling) ? 'nav_link-active isScrolling' : 'nav_link-active'}
              >
                TEAM
              </NavLink>
            </div>
            <NavLink
              to="/admin/profile"
              style={{ textDecoration: 'none' }}
            >
              <div
                id="nav_user-avatar"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${person_avatar})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              />
            </NavLink>
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
        </div>
      </div>
    )
  }
}

NavContainer.defaultProps = {
  person: undefined,
}
NavContainer.propTypes = {
  router: PropTypes.shape({ // eslint-disable-line react/no-unused-prop-types
    location: PropTypes.object,
  }).isRequired,
  handleSignOut: PropTypes.func.isRequired,
  person: PropTypes.objectOf(PropTypes.any),
}

/**
 * Router is required to trigger refreshes when inter-page navigation occurs.
 * `person_avatar` is required for the signed in user's profile picture.
 * @param {Object} state Redux App State
 */
const mapStateToProps = (state) => {
  const { router, auth } = state
  const { person } = auth
  return { router, person }
}

export default connect(mapStateToProps, { handleSignOut })(NavContainer)
