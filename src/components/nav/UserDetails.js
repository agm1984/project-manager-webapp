import React from 'react'
import PropTypes from 'prop-types'
import './Nav.css'

const UserDetails = (props) => {
  const { avatar } = props
  const name = 'Jacky'
  const levelXP = 2782
  const levelXPRequired = 5000
  const levelCompletionPercent = (+levelXP / +levelXPRequired) * 100
  const level = 87
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
            style={{ width: `${levelCompletionPercent}%` }}
          />
        </div>
        <div id="nav_left_user-xpNum">
          <div id="nav_left_user-xpNumerator">
            {`${levelXP}\u00a0`}
          </div>
          <div id="nav_left_user-xpDenominator">
            / {levelXPRequired}
          </div>
        </div>
      </div>
    </div>
  )
}

UserDetails.propTypes = {
  avatar: PropTypes.string.isRequired,
}

export default UserDetails
