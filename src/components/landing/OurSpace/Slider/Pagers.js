import React from 'react'
import PropTypes from 'prop-types'

/**
 * Pager tip visibility is controlled by Media Query.
 * See PhotoSlider.scss
 */
const Pagers = (props) => {
  const { slides, activePhoto, onScroll } = props
  return (
    <div>
      <ul className="pagers">
        <div id="pagers_tip">
          Press a photo to enlarge it
        </div>
        {slides.map((m, index) => (
          <button
            className={(index === activePhoto)
              ? 'pagers_button pagers_button-isActive'
              : 'pagers_button'}
            onClick={() => onScroll(index)}
            key={index}
          >
            {index.toString()}
          </button>
        ))}
      </ul>
    </div>
  )
}

Pagers.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePhoto: PropTypes.number.isRequired,
  onScroll: PropTypes.func.isRequired,
}

export default Pagers
