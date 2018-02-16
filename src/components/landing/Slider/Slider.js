import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pagers from './Pagers'
import Images from './Images'
import './Slider.css'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    }
  }

  handleScroll = active => this.setState({ active })

  render() {
    return (
      <div className="imgSlider">
        <Images
          slides={this.props.slides}
          useImages={this.props.useImages}
          active={this.state.active}
        />
        <Pagers
          slides={this.props.slides}
          onScroll={this.handleScroll}
        />
      </div>
    )
  }
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  useImages: PropTypes.bool.isRequired,
}

export default Slider
