import React, { Component } from 'react'
import OmniLogo from '../images/omniLogo'
import '../Landing.css'

// TODO: calculate shadow offset relative to element rather than page

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      computedShadow: null,
    }
  }

  handleMouseMove = (e) => {
    const shadowMaxDistance = 32 // in pixels
    const shadowSpread = '3px'
    const shadowColor = 'rgba(0, 0, 0, 0.3)'
    const pageWidth = window.outerWidth
    const pageHeight = window.outerHeight

    const aX = e.pageX - (pageWidth / 2)
    const aY = e.pageY - (pageHeight / 2)
    const ratioX = aX / pageWidth
    const ratioY = aY / pageHeight
    const shadowX = ratioX * shadowMaxDistance * -1
    const shadowY = ratioY * shadowMaxDistance * -1

    const computedShadow = {
      filter: `drop-shadow(${shadowX}px ${shadowY}px ${shadowSpread} ${shadowColor})`,
    }
    return this.setState({ computedShadow })
  }

  render() {
    return (
      <div
        className="hero_section"
        onMouseMove={this.handleMouseMove}
      >
        <OmniLogo
          height={330}
          style={this.state.computedShadow}
        />
        <div id="hero_section-scrollHint">
          <a href="#aboutUs"><span /></a>
        </div>
      </div>
    )
  }
}

export default Hero
