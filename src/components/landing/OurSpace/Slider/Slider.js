import React from 'react'
import PropTypes from 'prop-types'

const Slider = (props) => {
  const {
    imageWidth, activePhoto, slides,
    onMouseDown, onMouseMove, onMouseUp, onEnlargePhoto,
  } = props
  // const imageWidth = 20 // viewport width %
  const sliderStyles = {
    left: `${(activePhoto * -imageWidth) + (imageWidth / 2)}%`,
    width: `${slides.length * imageWidth}%`,
  }
  return (
    <div
      tabIndex={0}
      role="button"
      className="slider-wrapper"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <ul className="slides" style={sliderStyles}>
        {slides.map((slide, index) => (
          <li
            style={{
              backgroundImage: `url(${slide.photo})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 60%',
              width: `${100 / slides.length}%`,
            }}
            key={index}
          >
            <button
              className="slides-overlay"
              onClick={onEnlargePhoto}
            />
            <div className="slides_topRightText">{slide.topRightText}</div>
            <div className="slides_bottomLeftText">{slide.bottomLeftText}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

Slider.defaultProps = {
  onMouseDown: undefined,
  onMouseMove: undefined,
  onMouseUp: undefined,
}
Slider.propTypes = {
  imageWidth: PropTypes.number.isRequired,
  activePhoto: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
  onEnlargePhoto: PropTypes.func.isRequired,
}

export default Slider
