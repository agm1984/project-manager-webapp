import React from 'react'

const Pagers = (props) => {
  const { items, onScroll } = props
  return (

    <div>
      <ul className="pagers">
        {items.map((m, index) => (
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

export default Pagers
