import React, { Component } from 'react'
import Menu from './Menu'
import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import WhoWeAre from './WhoWeAre/WhoWeAre'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import OurSpace from './OurSpace/OurSpace'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import './Landing.css'
import './Menu.css'

/**
 * Debounce Function
 * @param {Function} func Function that requires throttling
 * @param {Number} wait Wait time in milliseconds between invocations
 */
const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPageScrolledFromTop: false,
      isMenuOpen: false,
    }
    this.scrollPositionY = 0
  }

  /**
   * When the Landing Page mounts, a scroll event listener should be added,
   * and the Browser should be scrolled to the top.
   */
  componentDidMount() {
    window.addEventListener('scroll', debounce(this.handleScroll, 16))
    return window.scrollTo(0, 0)
  }

  /**
   * When the Landing Page unmounts, the scroll even listener should be removed.
   */
  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
  }

  /**
   * When page scrolling occurs, the current Y-axis position relative to the top
   * should be recorded.
   */
  handleScroll = () => {
    if (this.scrollPositionY === 0 && window.scrollY > 0) {
      this.setState({ isPageScrolledFromTop: true })
    }
    if (this.scrollPositionY > 0 && window.scrollY === 0) {
      this.setState({ isPageScrolledFromTop: false })
    }
    this.scrollPositionY = window.scrollY
  }

  handleToggleMenu = () =>
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }))

  render() {
    const { isPageScrolledFromTop, isMenuOpen } = this.state
    return (
      <div id="landingPage">
        <Menu
          isPageScrolledFromTop={isPageScrolledFromTop}
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => this.handleToggleMenu()}
        />
        <Hero />
        <AboutUs />
        <WhoWeAre />
        <WhatWeDo />
        <OurSpace />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Landing
