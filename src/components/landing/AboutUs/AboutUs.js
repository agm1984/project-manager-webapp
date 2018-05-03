import React from 'react'
import '../Landing.css'

const AboutUs = () => {
  return (
    <div id="aboutUs">
      <h1 className="darkHeader">ABOUT US</h1>
      <h3 id="aboutUs-subheading">DIGITAL AND CREATIVE DESIGN</h3>
      <p className="aboutUs-text">It all boils down to communication. Communication is what we do. Telling stories. Your stories. To the audience you want to reach. How your stories get told―the media, the words, the images, the colours, the designs―that’s our business.</p>
      <p className="aboutUs-text">Maybe yours is a digital story, told through apps, websites or social; maybe it’s a graphical story rendered in art and colour; maybe it’s a photographic story, or a narrative story of words, music or the human voice. Or perhaps it’s a combination of all these things, and more. It’s called execution. And execution is our business.</p>
      <p className="aboutUs-text">But there’s another element of communication that precedes and governs execution. It’s the element that at times seems almost magical, almost indefinable. It’s a mysterious process that combines the practical, the intellectual, the emotional with years of experience and the ability and willingness to take an unexpected point-of-view, and somehow, someway, synthesizes something truly unique. It’s called ‘creative’. And more than anything else, ‘creative’ is our business.</p>
      <p className="aboutUs-text">
        <a id="contact_info-email" href="mailto:info@omniartcreative.com">
          Contact us
        </a>
        for a complete portfolio of our work.
      </p>
    </div>
  )
}

export default AboutUs
