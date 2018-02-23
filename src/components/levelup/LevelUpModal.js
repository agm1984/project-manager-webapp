import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Confetti from './confetti'
import levelUpImage from './images/levelUp.png'

class LevelUpModal extends Component {
  constructor(props) {
    super(props)
    this.handleConfettiShot(props.shootConfetti)
  }

  /**
   * When a Window is mounted, an event listener should be added to detect if
   * the user is attempting to bring the Window back to the foreground.
   */
  componentDidMount() {
    return document.addEventListener('click', this.handleWindowClick, true)
  }

  /**
   * For memory management reasons, the event listener is removed when
   * the Window unmounts.
   */
  componentWillUnmount() {
    return document.removeEventListener('click', this.handleWindowClick, true)
  }

  /**
   * This function runs every time the user clicks inside or outside the Window.
   * The Window should be brought to the foreground if the click is registered
   * inside the Window's boundaries. If the Window is maximized, the click handler
   * needs to be explicitly disabled to maintain expected functionality. Otherwise,
   * the `onActiveProgramChange` event will cause issues.
   * @param {Synthetic Event} event React-controlled Synthetic Event
   */
  handleWindowClick = (event) => {
    const domNode = ReactDOM.findDOMNode(this)
    if (!domNode || !domNode.contains(event.target)) {
      return null
    }
    return this.props.handleDismiss()
  }

  handleConfettiShot = (shootConfetti) => {
    console.log('doing')
    setTimeout(() => shootConfetti(false), 1000)
  }

  render() {
    const { confettiConfig, isDisplaying } = this.props
    return (
      <div id="levelUpModal-wrapper">
        <div id="levelUpModal">
          <div id="levelUpModal-heading">
            NICE WORK
            <Confetti
              className="loading-button__confetti"
              active={!isDisplaying}
              config={confettiConfig}
            />
          </div>
          <div id="levelUpModal_content-top">
            <img
              id="levelUpModal-icon"
              src={levelUpImage}
              alt=""
            />
            <p id="levelUpModal-text">
              <strong>You've hit level 52!</strong>
            </p>
          </div>
          <div id="levelUpModal_content-bottom">
            <p id="levelUpModal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
        </div>
      </div>
    )
  }
}

LevelUpModal.defaultProps = {
  isDisplaying: true,
}
LevelUpModal.propTypes = {
  isDisplaying: PropTypes.bool,
  shootConfetti: PropTypes.func.isRequired,
  confettiConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  handleDismiss: PropTypes.func.isRequired,
}

export default LevelUpModal
