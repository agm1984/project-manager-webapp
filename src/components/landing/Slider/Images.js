import React from 'react'
import gerry from '../images/Gerry.jpg'
import robin from '../images/Robin.jpg'
import jacky from '../images/Jacky.jpg'

const Images = (props) => {
  const { active, items, useImages } = props
  const imageWidth = 20
  const sliderStyles = {
    left: `${(active * -imageWidth) + (imageWidth / 2)}%`,
    width: `${items.length * imageWidth}%`,
  }
  // const slideStyles = {
  //   width: (100 / items.length) + '%',
  //   backgroundImage: `url(${image})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: '50% 60%',
  // }
  console.log('DIV STYLE', sliderStyles)
  // console.log('WIDTH', slideStyles)
  return (
    <div className="slider-wrapper">
      <ul className="slides" style={sliderStyles}>
        {items.map((image, index) => (
          <li
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 60%',
              width: `${100 / items.length}%`,
            }}
            key={index}
          />
        ))}
      </ul>
    </div>
  )
}

export default Images
