import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import TextInput from './TextInput'
import TextArea from './TextArea'
import Verification from './Verification'
import '../../Landing.css'
import Btest from './Btest'

/**
 * generateRandom creates a random number and it is used for
 * the Contact Form validation step to create the mathematical solution.
 */
const generateRandom = () => Math.floor((Math.random() * 10) + 1)

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: generateRandom(),
      num2: generateRandom(),
      isHumanVerified: false,
    }
    this.hoverThree = null
  }

  render() {
    const { num1, num2, isHumanVerified } = this.state
    const {
      handleSubmit, /* onSubmit, */ pristine, submitting,
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div id="contact_form-wrapper">
          <Field
            component={TextInput}
            type="text"
            name="person_name"
            placeholder="Name"
          />
          <Field
            component={TextInput}
            type="text"
            name="person_email"
            placeholder="Email Address"
          />
          <div className="contact_form-splitter">
            <div className="contact_input-half">
              <Field
                component={TextInput}
                type="text"
                name="person_tel"
                placeholder="Phone Number"
              />
            </div>
            <div className="contact_input-divider" />
            <div className="contact_input-half">
              <Field
                component={TextInput}
                type="text"
                name="message_subject"
                placeholder="Subject"
              />
            </div>
          </div>
          <Field
            component={TextArea}
            type="text"
            name="message_content"
            placeholder="Message"
          />
          <div className="contact_form_verification-wrapper">
            <div className="contact_form_verification-question">
              {`${num1} + ${num2} =`}
            </div>
            <div className="contact_input-divider" />
            <div className="contact_form_verification-solution">
              <Field
                component={Verification}
                type="text"
                name="message_verification"
                placeholder=""
                solution={num1 + num2}
              />
            </div>
          </div>
          <div id="contact_submit-wrapper">
            <button
              id="contact_submit"
              disabled={pristine || submitting}
              type="submit"
              href="#contact_message"
            >
              SEND
            </button>
          </div>
          <div id="contact_info-wrapper">
            <span id="contact_info-brand">OMNIART CREATIVE</span>
            <span id="contact_info-address">209-335 Wesley Street, Nanaimo, BC V9R 2T5</span>
            <a id="contact_info-email" href="mailto:info@omniartcreative.com">info@omniartcreative.com</a>
            <a id="contact_info-tel" href="tel:+2505916176">250 591 6176</a>
          </div>
        </div>
      </form>
    )
  }
}

const validate = (fields) => {
  // const {
  //   person_name,
  //   person_email,
  //   person_tel,
  //   message_subject,
  //   message_content,
  //   message_verification,
  // } = fields
  const errors = {}
  // if (!person_name) {
  //   errors.person_name = 'Please specify your name.'
  // }
  // if (!person_email) {
  //   errors.person_email = 'Please specify your email.'
  // }
  // if (!person_tel) {
  //   errors.person_tel = 'Please specify a phone number.'
  // }
  // if (!message_subject) {
  //   errors.message_subject = 'Please specify a subject.'
  // }
  // if (!message_content.length > 2000) {
  //   errors.message_content = 'Message cannot exceed 2000 characters.'
  // }
  // if (!message_verification) {
  //   errors.message_verification = 'Try again.'
  // }
  return errors
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({ validate, form: 'Contact' })(ContactForm)
