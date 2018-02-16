import React from 'react'
import PropTypes from 'prop-types'

const Images = (props) => {
  const { active, slides } = props
  const imageWidth = 20 // viewport width %
  const sliderStyles = {
    left: `${(active * -imageWidth) + (imageWidth / 2)}%`,
    width: `${slides.length * imageWidth}%`,
  }
  return (
    <div className="slider-wrapper">
      <ul className="slides" style={sliderStyles}>
        {slides.map((image, index) => (
          <li
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 60%',
              width: `${100 / slides.length}%`,
            }}
            key={index}
          />
        ))}
      </ul>
    </div>
  )
}

Images.propTypes = {
  active: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Images
