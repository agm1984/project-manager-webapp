import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import noPhoto from './images/noPhoto.png'
import './Nav.css'

const withCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

class UserDetails extends Component {
  constructor(props) {
    super(props)
    // let start = true
    this.state = {
      level: 87,
      levelXP: 0,
      levelXPRequired: 10000,
    }
  }

  render() {
    const {
      level, levelXP, levelXPRequired,
    } = this.state
    return (
      <div id="nav_left_user-container">
        <div id="nav_left_user_leftSide">
          <div
            id="nav_left_user-avatar"
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${person_avatar || noPhoto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          />
          <div id="nav_left_user-level">
            {level}
          </div>
        </div>
        <div id="nav_left_user_rightSide">
          <div id="nav_left_user-name">
            {person_givenName}
          </div>
          <div id="nav_left_user-xpFill">
            <div
              id="nav_left_user-xp"
              style={{
                width: `${(+levelXP / +levelXPRequired) * 100}%`,
                transition: 'width 500ms ease-in-out',
              }}
            />
          </div>
          <div id="nav_left_user-xpNum">
            <div id="nav_left_user-xpNumerator">
              {`${withCommas(levelXP)}\u00a0`}
            </div>
            <div id="nav_left_user-xpDenominator">
              / {withCommas(levelXPRequired)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// UserDetails.propTypes = {
//   person: PropTypes.shape({
//     person_avatar: PropTypes.string,
//     person_givenName: PropTypes.string,
//   }).isRequired,
// }

export default UserDetails
