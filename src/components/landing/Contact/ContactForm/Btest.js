import React from 'react'
import './Btest.css'

const Btest = () => {
  let hoverThree = null
  return (
    <div className="fucker">
      <div className="fucker">
        <button
          className="btest"
          href="#contact_message"
          ref={(el) => { hoverThree = el }}
          onMouseMove={(e) => {
            const x = e.pageX - hoverThree.offsetLeft
            const y = e.pageY - hoverThree.offsetTop
            console.log('Y page', e.pageY)
            console.log('Y offset', hoverThree.offsetTop)
            hoverThree.style.setProperty('--x', `${x}px`)
            hoverThree.style.setProperty('--y', `${y}px`)
          }}
        >
          GET IN TOUCH
        </button>
      </div>
    </div>
  )
}

export default Btest
