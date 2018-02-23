import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { confetti } from 'dom-confetti'

const style = {
  position: 'relative',
}

class Confetti extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.active && !this.props.active) {
      confetti(this.container, nextProps.config)
    }
  }

  setRef = (ref) => {
    this.container = ref
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={style}
        ref={this.setRef}
      />
    )
  }
}

Confetti.propTypes = {
  active: PropTypes.bool.isRequired,
  config: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string.isRequired,
}

export default Confetti
