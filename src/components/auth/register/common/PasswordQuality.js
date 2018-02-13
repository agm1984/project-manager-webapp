import React from 'react'
import PropTypes from 'prop-types'

/**
 * This utility function is executed on keypress and tests a password string for
 * its security quality, on a gradient of 0 to 12. A higher score is better.
 * @param {*} p Password to test
 */
const testPassword = (p) => {
  const hasSpecial = /[^a-zA-Z0-9]/.test(p)
  const hasNumber = /[0-9]/.test(p)
  const hasMixedCase = /[A-Z]/.test(p) && /[a-z]/.test(p)

  // TOO SHORT
  if (p.length < 8) return 0

  // WEAK
  if (p.length <= 10) {
    if (hasSpecial && hasNumber && hasMixedCase) return 3
    if (hasSpecial || hasNumber || hasMixedCase) return 2
    if (!hasSpecial && !hasNumber && !hasMixedCase) return 1
  }

  // OKAY
  if (p.length <= 12) {
    if (hasSpecial && hasNumber && hasMixedCase) return 6
    if (hasSpecial || hasNumber || hasMixedCase) return 5
    if (!hasSpecial && !hasNumber && !hasMixedCase) return 4
  }

  // GOOD
  if (p.length <= 14) {
    if (hasSpecial && hasNumber && hasMixedCase) return 9
    if (hasSpecial || hasNumber || hasMixedCase) return 8
    if (!hasSpecial && !hasNumber && !hasMixedCase) return 7
  }

  // EXCELLENT
  if (p.length > 14) {
    if (hasSpecial && hasNumber && hasMixedCase) return 12
    if (hasSpecial || hasNumber || hasMixedCase) return 11
    if (!hasSpecial && !hasNumber && !hasMixedCase) return 10
  }
  return null
}

/**
 * The Password Quality Component displays the quality-check result directly above
 * the Text Input Component that specifies it.
 * @param {*} props The Component's props
 */
const PasswordQuality = (props) => {
  const { test } = props
  if (!test) return null
  const score = testPassword(test)
  const quality = {
    0: { label: 'Too short', color: '#FF0000' },
    1: { label: 'Weak', color: '#FF2300' },
    2: { label: 'Weak', color: '#FF4600' },
    3: { label: 'Weak', color: '#FF6900' },
    4: { label: 'Okay', color: '#FFAF00' },
    5: { label: 'Okay', color: '#FFD300' },
    6: { label: 'Okay', color: '#FFF600' },
    7: { label: 'Good', color: '#E5FF00' },
    8: { label: 'Good', color: '#9FFF00' },
    9: { label: 'Good', color: '#7CFF00' },
    10: { label: 'Excellent', color: '#68FF00' },
    11: { label: 'Excellent', color: '#45FF00' },
    12: { label: 'Extreme', color: '#00FF00' },
  }
  return (
    <div
      style={{
        opacity: 0.75,
        flex: 0,
        height: '1.4rem',
        flexDirection: 'row',
        position: 'relative',
        marginTop: '0.8rem',
        marginBottom: '-0.8rem',
      }}
    >
      <div
        style={{
          height: '0.8rem',
          width: `${((score + 1) / Object.keys(quality).length) * 100}%`,
          backgroundColor: quality[score].color,
        }}
      />
      <div
        style={{
          fontSize: '11px',
          position: 'absolute',
          right: '0.4rem',
          top: '-0.2rem',
        }}
      >
        {quality[score].label}
      </div>
    </div>
  )
}

PasswordQuality.propTypes = {
  test: PropTypes.string.isRequired,
}

export default PasswordQuality
