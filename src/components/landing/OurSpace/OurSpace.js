import React from 'react'
import PhotoSlider from './Slider/PhotoSlider'
import slides from './slider.config'
import '../Landing.css'

const OurSpace = () => {
  return (
    <div id="ourSpace">
      <h1 className="lightHeader">OUR SPACE</h1>
      <PhotoSlider
        slides={slides}
      />
    </div>
  )
}

export default OurSpace

