import React from 'react'
import PropTypes from 'prop-types'
import {
  FormSection, FormShowText, FormShowEmail, FormShowImage,
} from '../../common/'
import { formatTime, formatTel } from '../../../utils'

const PersonViewForm = (props) => {
  const { initialValues } = props
  const {
    person_status,
    person_memberType,
    person_canBeEmailed,
    person_avatar,
    person_givenName,
    person_familyName,
    person_email,
    person_tel,
    person_gender,
    person_birthday,
    person_location,
    person_bio,
    person_created,
  } = initialValues
  return [
    <FormSection isTop heading="MEMBERSHIP" key="membership">
      <FormShowText name="Status" value={person_status} />
      <FormShowText name="Joined" value={formatTime(+person_created)} />
      <FormShowText name="Member Type" value={person_memberType} />
      <FormShowText
        name="Can Be Emailed?"
        value={(person_canBeEmailed === null)
          ? 'unspecified'
          : person_canBeEmailed.toString()}
      />
    </FormSection>,
    <FormSection heading="DETAILS" key="details">
      <FormShowImage value={person_avatar || ''} />
      <FormShowText name="First Name" value={person_givenName} />
      <FormShowText name="Last Name" value={person_familyName} />
      <FormShowEmail name="Email" value={person_email} />
      <FormShowText name="Phone" value={formatTel(person_tel) || ''} />
      <FormShowText name="Gender" value={person_gender || ''} />
      <FormShowText name="Birthday" value={person_birthday || ''} />
    </FormSection>,
    <FormSection heading="LOCATION" key="location">
      <FormShowText value={person_location} />
    </FormSection>,
    <FormSection heading="ABOUT" key="about">
      <FormShowText value={person_bio || ''} />
    </FormSection>,
  ]
}

PersonViewForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default PersonViewForm
