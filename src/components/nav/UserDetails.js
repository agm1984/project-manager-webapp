import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import jacky from './images/Jacky.jpg'
import './Nav.css'

const withCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

class UserDetails extends Component {
  constructor(props) {
    super(props)
    let start = true
    this.state = {
      name: 'Jacky',
      avatar: jacky,
      level: 87,
      levelXP: 0,
      levelXPRequired: 10000,
    }
    if (start) {
      for (let i = 0; i < 20; i += 1) {
        setTimeout(() => this.updateXP(), i * 1000)
      }
      start = false
    }
  }

  getRandomXP = () => this.setState({
    levelXP: Math.floor((Math.random() * 5000) + 1),
  })

  updateXP = () => {
    if (this.state.levelXP > this.state.levelXPRequired) {
      console.log('done')
      return null
    }
    const num = this.state.levelXP + 900
    if (num >= 10000) {
      return this.setState({
        levelXP: 10000,
      })
    }
    return this.setState({
      levelXP: this.state.levelXP + 900,
    })
  }

  render() {
    const {
      avatar, level, name, levelXP, levelXPRequired,
    } = this.state
    return (
      <div id="nav_left_user-container">
        <div id="nav_left_user_leftSide">
          <div
            id="nav_left_user-avatar"
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${avatar})`,
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
            {name}
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

export default UserDetails
