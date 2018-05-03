import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.node = null
  }

  componentWillMount() {
    return document.addEventListener('mousedown', this.handleOutsideClick, false)
  }

  componentWillUnmount() {
    return document.removeEventListener('mousedown', this.handleOutsideClick, false)
  }

  handleOutsideClick = (e) => {
    if (this.node && this.node.contains(e.target)) {
      // This condition fires on clicks inside Modal
      return null
    }
    if (!this.node) {
      // This condition fires once when Modal mounts
      return null
    }
    // This condition only fires on clicks outside Modal
    return this.props.onClose()
  }

  render() {
    const { show, children, onClose } = this.props
    if (!show) {
      return null
    }

    const backdropStyle = {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      transition: 'background-color 500ms ease-in-out',
      padding: 64,
      zIndex: 2,
    }

    const modalStyle = {
      boxShadow: '-8px 14px 40px 0px rgba(0, 0, 0, 1)',
      backgroundColor: '#fff',
      margin: '0 auto',
      padding: 0,
    }

    return (
      <div className="modal_backdrop" style={backdropStyle}>
        <div
          ref={(node) => {
            this.node = node
          }}
          className="modal_window animated zoomIn"
          style={modalStyle}
        >
          {children}
          <button
            className="modal_closeButton"
            onClick={onClose}
          >
            <svg viewBox="0 0 40 40">
              <path
                className="modal_closeButton-icon"
                d="M 10,10 L 30,30 M 30,10 L 10,30"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  }
}

Modal.defaultProps = {
  show: false,
}
Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
