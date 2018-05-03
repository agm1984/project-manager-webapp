import React from 'react'
import OmniLogo from './images/omniLogo'

const Menu = (props) => {
  const {
    isPageScrolledFromTop, isMenuOpen, onToggleMenu,
  } = props
  return [
    <div
      className={isMenuOpen
        ? 'burger clicked'
        : `${isPageScrolledFromTop ? 'burger' : ''}`}
      style={{
        backgroundColor: isMenuOpen ? '' : 'rgba(255, 255, 255, 0.08)',
      }}
      key={1}
    >
      {(isPageScrolledFromTop || isMenuOpen) && (
        <div className="menuHeader animated zoomIn">
          <div id="menuHeader_left">
            <OmniLogo height={50} />
          </div>
          <div id="menuHeader_center" />
          <div id="menuHeader_right">
            <button
              className={isMenuOpen ? 'hamburger hamburger--3dxy is-active' : 'hamburger hamburger--3dxy'}
              type="button"
              onClick={onToggleMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>,
    <nav className={isMenuOpen ? 'show' : ''} key={2}>
      <ul className="main">
        <li><a href="#whoWeAre">WHO WE ARE</a></li>
        <li><a href="#whatWeDo">WHAT WE DO</a></li>
        <li><a href="#ourSpace">OUR SPACE</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <div className="about">
        <p>With over 30 years of experience serving Vancouver Island, Omniart offers unmatched creative expertise and quality.</p>
      </div>
      <div className="social">
        <a href="https:/www.twitter.com/OmniartCreative" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><g transform="translate(0, 0)"><path d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6 c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9 c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2 c1.7,5.2,6.5,9,12.3,9.1c-4.5,3.5-10.2,5.6-16.3,5.6c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.2,0,37.4-20,37.4-37.4 c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2z"></path></g></svg></a>
        <a href="https:/www.facebook.com/pages/OmniartCreative" target="_blank" rel="noopener noreferrer"><svg enableBackground="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" /></svg></a>
        <a href="https:/www.instagram.com/OmniartCreative" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64"><g transform="translate(0, 0)"><path d="M32,5.766c8.544,0,9.556,0.033,12.931,0.187c3.642,0.166,7.021,0.895,9.621,3.496 c2.6,2.6,3.329,5.979,3.496,9.621c0.154,3.374,0.187,4.386,0.187,12.931s-0.033,9.556-0.187,12.931 c-0.166,3.642-0.895,7.021-3.496,9.621c-2.6,2.6-5.98,3.329-9.621,3.496c-3.374,0.154-4.386,0.187-12.931,0.187 s-9.557-0.033-12.931-0.187c-3.642-0.166-7.021-0.895-9.621-3.496c-2.6-2.6-3.329-5.979-3.496-9.621 C5.798,41.556,5.766,40.544,5.766,32s0.033-9.556,0.187-12.931c0.166-3.642,0.895-7.021,3.496-9.621 c2.6-2.6,5.979-3.329,9.621-3.496C22.444,5.798,23.456,5.766,32,5.766 M32,0c-8.691,0-9.78,0.037-13.194,0.193 c-5.2,0.237-9.768,1.511-13.436,5.178C1.705,9.037,0.43,13.604,0.193,18.806C0.037,22.22,0,23.309,0,32 c0,8.691,0.037,9.78,0.193,13.194c0.237,5.2,1.511,9.768,5.178,13.436c3.666,3.666,8.234,4.941,13.436,5.178 C22.22,63.963,23.309,64,32,64s9.78-0.037,13.194-0.193c5.199-0.237,9.768-1.511,13.436-5.178c3.666-3.666,4.941-8.234,5.178-13.436 C63.963,41.78,64,40.691,64,32s-0.037-9.78-0.193-13.194c-0.237-5.2-1.511-9.768-5.178-13.436 c-3.666-3.666-8.234-4.941-13.436-5.178C41.78,0.037,40.691,0,32,0L32,0z"></path> <path data-color="color-2" d="M32,15.568c-9.075,0-16.432,7.357-16.432,16.432c0,9.075,7.357,16.432,16.432,16.432 S48.432,41.075,48.432,32C48.432,22.925,41.075,15.568,32,15.568z M32,42.667c-5.891,0-10.667-4.776-10.667-10.667 c0-5.891,4.776-10.667,10.667-10.667c5.891,0,10.667,4.776,10.667,10.667C42.667,37.891,37.891,42.667,32,42.667z"></path> <circle data-color="color-2" cx="49.082" cy="14.918" r="3.84"></circle></g></svg></a>
      </div >
      <div className="sub">
        <div className="brand">OMNIART CREATIVE</div>
        <div className="address">209-335 Wesley Street</div>
        <div className="address">Nanaimo, BC V9R 2T5</div>
        <a className="email" href="mailto:info@omniartcreative.com">info@omniartcreative.com</a>
        <a className="tel" href="tel:+2505916176">250 591 6176</a>
      </div>
    </nav>,
    <div className={isMenuOpen ? 'overlay show' : 'overlay'} key={3} />,
  ]
}

export default Menu
