import React from 'react'
import OmniLogo from '../images/omniLogo'

const Footer = () => (
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
      © {new Date().getFullYear()} Omniart Creative Inc. All rights reserved.
    </span>
  </div>
)

export default Footer
