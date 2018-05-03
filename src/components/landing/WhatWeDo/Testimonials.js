import React from 'react'
import allTestimonials from './testimonials.config'

const Testimonials = () => {
  return (
    <div id="whatWeDo_testimonials-wrapper">
      <div id="whatWeDo_testimonials">
        {allTestimonials.map(testimonial => (
          <div className="whoWeAre_person-cardSmall" key={testimonial.name}>
            <div className="whoWeAre_person-photoWrapperSmall">
              <img
                className="whoWeAre_photoSmall"
                src={testimonial.photo}
                alt={testimonial.name}
              />
            </div>
            <div className="whoWeAre_person-detailsWrapperSmall">
              <h2 className="whoWeAre_person-nameSmall" style={{ color: '#000' }}>
                {testimonial.name.toUpperCase()}
              </h2>
              <h3 className="whoWeAre_person-titleSmall" style={{ color: '#000' }}>
                {testimonial.title.toUpperCase()}
              </h3>
              {testimonial.blurb.map((paragraph, i) => (
                <p
                  className="whoWeAre_person-textSmall"
                  style={{ color: '#000' }}
                  key={i}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
