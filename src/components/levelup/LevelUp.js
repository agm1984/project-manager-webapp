import React, { Component } from 'react'
import LevelUpModal from './LevelUpModal'
import './confetti.css'

class LevelUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisplaying: true,
      shouldDismiss: false,
      settings: {
        angle: 127,
        spread: 60,
        startVelocity: 24,
        elementCount: 80,
        decay: 0.95,
      },
    }
  }

  shootConfetti = (value) => {
    this.setState({ isDisplaying: value })
  }

  render() {
    const { settings, isDisplaying, shouldDismiss } = this.state
    console.log('DISPLAYING', isDisplaying)
    console.log('SHOULD DISMISS', shouldDismiss)
    return !shouldDismiss && (
      <div id="LevelUp">
        <div id="LevelUp-confetti">
          <LevelUpModal
            isDisplaying={isDisplaying}
            shootConfetti={this.shootConfetti}
            confettiConfig={settings}
            handleDismiss={() => {
              console.log('HANDLE DISMISS')
              this.setState({ shouldDismiss: true })
            }}
          />
        </div>
      </div>
    )
  }
}

export default LevelUp
