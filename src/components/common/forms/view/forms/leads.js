import React from 'react'
import PropTypes from 'prop-types'
import {
  FormSection, FormShowText, FormShowEmail, FormShowImage,
} from '../../common/'
import { formatTime, formatTel } from '../../../utils'

const LeadViewForm = (props) => {
  const { initialValues } = props
  const {
    lead_status,
    lead_memberType,
    lead_canBeEmailed,
    lead_avatar,
    lead_givenName,
    lead_familyName,
    lead_email,
    lead_tel,
    lead_gender,
    lead_birthday,
    lead_location,
    lead_bio,
    lead_created,
  } = initialValues
  return [
    <FormSection isTop heading="MEMBERSHIP" key="membership">
      <FormShowText name="Status" value={lead_status} />
      <FormShowText name="Joined" value={formatTime(+lead_created)} />
      <FormShowText name="Member Type" value={lead_memberType} />
      <FormShowText
        name="Can Be Emailed?"
        value={(lead_canBeEmailed === null)
          ? 'unspecified'
          : lead_canBeEmailed.toString()}
      />
    </FormSection>,
    <FormSection heading="DETAILS" key="details">
      <FormShowImage value={lead_avatar || ''} />
      <FormShowText name="First Name" value={lead_givenName} />
      <FormShowText name="Last Name" value={lead_familyName} />
      <FormShowEmail name="Email" value={lead_email} />
      <FormShowText name="Phone" value={formatTel(lead_tel) || ''} />
      <FormShowText name="Gender" value={lead_gender || ''} />
      <FormShowText name="Birthday" value={lead_birthday || ''} />
    </FormSection>,
    <FormSection heading="LOCATION" key="location">
      <FormShowText value={lead_location} />
    </FormSection>,
    <FormSection heading="ABOUT" key="about">
      <FormShowText value={lead_bio || ''} />
    </FormSection>,
  ]
}

LeadViewForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default LeadViewForm
