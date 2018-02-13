import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pagers from './Pagers'
import Images from './Images'
import './Slider.css'
import gerry from '../images/Gerry.jpg'
import robin from '../images/Robin.jpg'
import jacky from '../images/Jacky.jpg'

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
          items={this.props.slides}
          useImages={this.props.useImages}
          active={this.state.active}
        />
        <Pagers
          items={this.props.slides}
          onScroll={this.handleScroll}
        />
      </div>
    )
  }
}

export default Slider
