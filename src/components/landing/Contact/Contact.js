import React, { Component } from 'react'
import GoogleView from './GoogleView/GoogleView'
import ContactForm from './ContactForm/ContactForm'
import '../Landing.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLat: 0,
      currentLng: 0,
      canShowDirections: false,
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

  handleMessageSend = (message) => {
    console.log('SENDING MESSAGE', message)
  }

  render() {
    const {
      canShowDirections, currentLat, currentLng, num1, num2,
    } = this.state
    return (
      <div id="contact">
        <div id="contact_header-wrapper">
          <h1 className="lightHeader">
            CONTACT
          </h1>
        </div>
        <div id="contact_map">
          <GoogleView
            canShowDirections={canShowDirections}
            currentLat={currentLat}
            currentLng={currentLng}
          />
        </div>
        <div id="contact_form">
          <h4 className="contact_subheading">
            GET IN TOUCH
          </h4>
          <ContactForm
            verification={{ num1, num2 }}
            onSubmit={message => this.handleMessageSend(message)}
          />
        </div>
      </div>
    )
  }
}

export default Contact
