import React from 'react'
import PropTypes from 'prop-types'

const Pagers = (props) => {
  const { slides, onScroll } = props
  return (

    <div>
      <ul className="pagers">
        {slides.map((m, index) => (
          <button
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
  onScroll: PropTypes.func.isRequired,
}

export default Pagers
