import React, { Component } from 'react'
import OmniLogo from './images/omniLogo'
import Slider from './Slider/Slider'
import GoogleView from './GoogleView/GoogleView'
// import GoogleViewWithDirections from './GoogleView/GoogleViewWithDirections'
import ContactForm from './ContactForm/ContactForm'
import './Landing.css'
import gerry from './images/Gerry.jpg'
import robin from './images/Robin.jpg'
import jacky from './images/Jacky.jpg'
import izzy from './images/Izzy.jpg'
import ted from './images/Ted.jpg'
import ben from './images/Ben.jpg'
import rainer from './images/Rainer.jpg'
import leesa from './images/Leesa.jpg'

const generateRandom = () => Math.floor((Math.random() * 10) + 1)

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLat: 0,
      currentLng: 0,
      canShowDirections: false,
      num1: generateRandom(),
      num2: generateRandom(),
      currentYear: new Date().getFullYear(),
    }
    this.getLocation()
  }

  getLocation() {
    return window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLat = position.coords.latitude
        const currentLng = position.coords.longitude
        return this.setState({
          currentLat,
          currentLng,
          canShowDirections: true,
        })
      },
      error => console.log('ERROR', error),
    )
  }

  handleMessageSend(message) {
    console.log('SENDING MESSAGE', message)
  }

  render() {
    const {
      canShowDirections, currentLat, currentLng, num1, num2,
    } = this.state
    return (
      <div className="landingPage">
        <div className="hero_section">
          <OmniLogo height={330} />
          <div id="hero_section-scrollHint">
            <a href="#aboutUs"><span /></a>
          </div>
        </div>
        <div id="aboutUs">
          <h1 className="darkHeader">ABOUT US</h1>
          <h3 id="aboutUs-subheading">DIGITAL AND CREATIVE DESIGN</h3>
          <p className="aboutUs-text">It all boils down to communication. Communication is what we do. Telling stories. Your stories. To the audience you want to reach. How your stories get told―the media, the words, the images, the colours, the designs―that’s our business.</p>
          <p className="aboutUs-text">Maybe yours is a digital story, told through apps, websites or social; maybe it’s a graphical story rendered in art and colour; maybe it’s a photographic story, or a narrative story of words, music or the human voice. Or perhaps it’s a combination of all these things, and more. It’s called execution. And execution is our business.</p>
          <p className="aboutUs-text">But there’s another element of communication that precedes and governs execution. It’s the element that at times seems almost magical, almost indefinable. It’s a mysterious process that combines the practical, the intellectual, the emotional with years of experience and the ability and willingness to take an unexpected point-of-view, and somehow, someway, synthesizes something truly unique. It’s called ‘creative’. And more than anything else, ‘creative’ is our business.</p>
          <p className="aboutUs-text"><a id="contact_info-email" href="mailto:info@omniartcreative.com">Contact us</a> for a complete portfolio of our work.</p>
        </div>
        <div id="whoWeAre">
          <h1 className="lightHeader">WHO WE ARE</h1>
          <div className="whoWeAre_person-card">
            <img
              className="whoWeAre_photo photoLeft"
              src={gerry}
              alt="Gerry Patenaude"
            />
            <div className="whoWeAre_person-detailsWrapper">
              <h2 className="whoWeAre_person-name">GERRY PATENAUDE</h2>
              <h3 className="whoWeAre_person-title">CREATIVE DIRECTOR</h3>
              <p className="whoWeAre_person-text">Some comedian once started an autobiographical routine with the declaration: ‘I started out as a child’. It got a laugh. Myself, I started out as a child, too. And in some ways, I’ve never changed. Which is a good thing. Because a lot of what’s called ‘creativity’ is the ability to think in the naive, simple, uninhibited way that a child thinks.</p>
              <p className="whoWeAre_person-text">Of course, businesses are run by grownups; work is performed by grownups; grownups undertake the practical, professional, dependable operations of a serious, excellence-driven, creative organization. So, yes, most of the time, I’m a grownup, doing grownup things―branding, design, illustration, video, art direction.</p>
              <p className="whoWeAre_person-text">But when it’s time to quietly create, to park my motorcycle and put aside my guitar, to seek and find that magical little inspirational jewel, when it’s just me and the blank monitor screen, it’s comforting to know I still have that child to rely on.</p>
              <a className="whoWeAre_contact" href="#contact_message">GET IN TOUCH</a>
            </div>
          </div>
          <div className="whoWeAre_person-card">
            <div className="whoWeAre_person-detailsWrapper">
              <h2 className="whoWeAre_person-name">ROBIN HOLDSWORTH</h2>
              <h3 className="whoWeAre_person-title">ART DIRECTOR</h3>
              <p className="whoWeAre_person-text">If you ever watch Antiques Roadshow you’ll know that what’s called ‘illustrative art’, particularly illustrative art from the golden age of magazine cover art, the 1930’s, 40’s, 50’s and 60’s, is just now coming to be respected for its true intrinsic artistic integrity, and its creators for their skill and talent. The line between ‘illustrative art’ and ‘fine art’ is becoming blurred, and even in some cases, disappearing.</p>
              <p className="whoWeAre_person-text">I’m both an illustrative artist and a fine artist. And that’s a good thing, if you’ll forgive my immodesty, for our clients. Because creativity is developed and enhanced by practice, and my passion for all types of artistic endeavours means my creativity gets a constant and vigourous workout, much as my athleticism and fitness gets well exercised in the boxing ring and in the great outdoors. I’ve been an artist all my life, and for the last twelve years I’ve been applying my energy and zeal to branding, web design, and illustration, and to the application of my talents to practical, real-world communication issues. In other words, using art and design to tell our clients’ stories effectively and creatively. Making pictures that are well worth those proverbial thousand words.</p>
              <a className="whoWeAre_contact" href="#contact_message">GET IN TOUCH</a>
            </div>
            <img
              className="whoWeAre_photo photoRight"
              src={robin}
              alt="Robin Holdsworth"
            />
          </div>
          <div id="whoWeAre_grid">
            <div className="whoWeAre_person-cardSmall">
              <img
                className="whoWeAre_photoSmall"
                src={jacky}
                alt="Jacky Li"
              />
              <div className="whoWeAre_person-detailsWrapperSmall">
                <h2 className="whoWeAre_person-nameSmall">JACKY LI</h2>
                <h3 className="whoWeAre_person-titleSmall">SENIOR DESIGNER</h3>
                <p className="whoWeAre_person-textSmall">Give Jacky a creative challenge and a computer, then stand back. Animation? Love it. Photo manipulation? Cool. 3D? Easy, peasy. The man is more or less brilliant, our own Jacky-of-all-trades. Bad pun; great designer.</p>
              </div>
            </div>
            <div className="whoWeAre_person-cardSmall">
              <img
                className="whoWeAre_photoSmall"
                src={izzy}
                alt="Izzy K - G"
              />
              <div className="whoWeAre_person-detailsWrapperSmall">
                <h2 className="whoWeAre_person-nameSmall">IZZY K - G</h2>
                <h3 className="whoWeAre_person-titleSmall">DESIGN / PHOTOGRAPHY</h3>
                <p className="whoWeAre_person-textSmall">When Izzy Gets Busy―it could be a song title. But it isn’t. It’s more like an invocation, a promise, a warning almost. Because when our Izzy gets busy, magic happens. Design magic; image magic; visual magic.</p>
              </div>
            </div>
            <div className="whoWeAre_person-cardSmall">
              <img
                className="whoWeAre_photoSmall"
                src={ted}
                alt="Ted Cowie"
              />
              <div className="whoWeAre_person-detailsWrapperSmall">
                <h2 className="whoWeAre_person-nameSmall">TED COWIE</h2>
                <h3 className="whoWeAre_person-titleSmall">BUSINESS DEVELOPMENT</h3>
                <p className="whoWeAre_person-textSmall">Trust. Creative is a trust business. And no one has earned more trust in the business than Ted. For over 40 years major Ad Agencies and clients like Home Depot and Budweiser have placed their trust in Ted. So you can, too.</p>
              </div>
            </div>
            <div className="whoWeAre_person-cardSmall">
              <img
                className="whoWeAre_photoSmall"
                src={ben}
                alt="Ben Romvari"
              />
              <div className="whoWeAre_person-detailsWrapperSmall">
                <h2 className="whoWeAre_person-nameSmall">BEN ROMVARI</h2>
                <h3 className="whoWeAre_person-titleSmall">WEB PROGRAMMER</h3>
                <p className="whoWeAre_person-textSmall">There are web sites and there are web sites. The great ones need more than inspired design; they need inspired programming from an inspired programmer. Ben really gets it, so the rest of us don’t have to.</p>
              </div>
            </div>
            <div className="whoWeAre_person-cardSmall">
              <img
                className="whoWeAre_photoSmall"
                src={rainer}
                alt="Rainer Plendl"
              />
              <div className="whoWeAre_person-detailsWrapperSmall">
                <h2 className="whoWeAre_person-nameSmall">RAINER PLENDL</h2>
                <h3 className="whoWeAre_person-titleSmall">PHOTOGRAPHY</h3>
                <p className="whoWeAre_person-textSmall">As a child, Rainer dreamed of becoming a photographer, proving that with hard work, thorough training, and pure, raw talent, dreams can come true. And now, your dream of a Plendl image for your business can come true, too.</p>
              </div>
            </div>
            <div className="whoWeAre_person-cardSmall">
              <img
                className="whoWeAre_photoSmall"
                src={leesa}
                alt="Leesa Patenaude"
              />
              <div className="whoWeAre_person-detailsWrapperSmall">
                <h2 className="whoWeAre_person-nameSmall">LEESA PATENAUDE</h2>
                <h3 className="whoWeAre_person-titleSmall">CO-FOUNDER</h3>
                <p className="whoWeAre_person-textSmall">Leesa is a sort of silent partner. A really loud silent partner. Because what Leesa brings to the table is what we call perfect pitch: discretion, instinct, anticipation, intuition. A knack for knowing what works and what doesn’t.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="whatWeDo">
          <h1 className="darkHeader">WHAT WE DO</h1>
          {/* <Slider /> */}
        </div>
        <div id="ourSpace">
          <h1 className="lightHeader">OUR SPACE</h1>
          <Slider
            useImages="true"
            slides={[gerry, robin, jacky, izzy, ted]}
          />
        </div>
        <div id="contact">
          <div id="contact_header-wrapper">
            <h1 className="lightHeader">CONTACT</h1>
          </div>
          <div id="contact_map">
            <GoogleView
              canShowDirections={canShowDirections}
              currentLat={currentLat}
              currentLng={currentLng}
            />
          </div>
          <div id="contact_message">
            <h4 className="contact_subheading">GET IN TOUCH</h4>
            <ContactForm
              verification={{ num1, num2 }}
              onSubmit={message => this.handleMessageSend(message)}
            />
          </div>
        </div>
        <div id="footer">
          <ul id="footer_nav">
            <li>
              <OmniLogo height={96} />
            </li>
            <li>
              <a href="#whoWeAre" className="footer_nav-link">
                WHO WE ARE
              </a>
            </li>
            <li>
              <a href="#whatWeDo" className="footer_nav-link">
                WHAT WE DO
              </a>
            </li>
            <li>
              <a href="#ourSpace" className="footer_nav-link">
                OUR SPACE
              </a>
            </li>
            <li>
              <a href="#contact" className="footer_nav-link">
                CONTACT
              </a>
            </li>
          </ul>
          <span id="footer_copyright">
            © {this.state.currentYear} Omniart Creative Inc. All rights reserved.
          </span>
        </div>
      </div>
    )
  }
}

export default Landing
