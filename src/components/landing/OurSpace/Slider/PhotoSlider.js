import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from './Slider'
import Pagers from './Pagers'
import Modal from '../../WhatWeDo/Modal'
import './PhotoSlider.css'

class PhotoSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePhoto: 0,
      isModalOpen: false,
    }
    // this._scroller = null
    this.startX = null
  }

  onMouseDown = (event) => {
    if (window.innerWidth < 1400) {
      return
    }
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('mouseup', this.onMouseUp)
    this.startX = event.clientX
  }

  onMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('mouseup', this.onMouseUp)
  }

  handleMouseMove = (event) => {
    const slideCount = this.props.slides.length
    const distance = event.clientX - this.startX
    if (distance > 0) {
      this.setState((prevState) => {
        if (prevState.activePhoto === 0) return null
        return { activePhoto: prevState.activePhoto - 1 }
      })
      window.removeEventListener('mousemove', this.handleMouseMove)
      window.removeEventListener('mouseup', this.onMouseUp)
    }
    if (distance < 0) {
      this.setState((prevState) => {
        if (prevState.activePhoto === (slideCount - 1)) return null
        return { activePhoto: prevState.activePhoto + 1 }
      })
      window.removeEventListener('mousemove', this.handleMouseMove)
      window.removeEventListener('mouseup', this.onMouseUp)
    }
  }

  handleScroll = activePhoto => this.setState({ activePhoto })

  handleEnlargePhoto = () => {
    if (window.innerWidth > 1400) {
      return null
    }
    return this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }))
  }

  render() {
    const { slides } = this.props
    const { activePhoto, isModalOpen } = this.state
    return (
      <div className="imgSlider">
        <Slider
          imageWidth={50}
          slides={slides}
          activePhoto={activePhoto}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onEnlargePhoto={this.handleEnlargePhoto}
        />
        <Pagers
          slides={this.props.slides}
          activePhoto={activePhoto}
          onScroll={this.handleScroll}
        />
        <Modal
          show={isModalOpen}
          onClose={() => this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen,
          }))}
        >
          <img
            className="whatWeDo_grid_feature-photo"
            src={slides[activePhoto].photo}
            alt="Enlarged Version"
          />
        </Modal>
      </div>
    )
  }
}

PhotoSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PhotoSlider
