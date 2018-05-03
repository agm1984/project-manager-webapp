import React from 'react'
import PropTypes from 'prop-types'
import {
  FormSection, FormShowText, FormShowEmail, FormShowImage,
} from '../../common/'
import { formatTime, formatTel } from '../../../utils'

const ClientViewForm = (props) => {
  const { initialValues } = props
  const {
    client_status,
    client_memberType,
    client_canBeEmailed,
    client_avatar,
    client_givenName,
    client_familyName,
    client_email,
    client_tel,
    client_gender,
    client_birthday,
    client_location,
    client_bio,
    client_created,
  } = initialValues
  return [
    <FormSection isTop heading="MEMBERSHIP" key="membership">
      <FormShowText name="Status" value={client_status} />
      <FormShowText name="Joined" value={formatTime(+client_created)} />
      <FormShowText name="Member Type" value={client_memberType} />
      <FormShowText
        name="Can Be Emailed?"
        value={(client_canBeEmailed === null)
          ? 'unspecified'
          : client_canBeEmailed.toString()}
      />
    </FormSection>,
    <FormSection heading="DETAILS" key="details">
      <FormShowImage value={client_avatar || ''} />
      <FormShowText name="First Name" value={client_givenName} />
      <FormShowText name="Last Name" value={client_familyName} />
      <FormShowEmail name="Email" value={client_email} />
      <FormShowText name="Phone" value={formatTel(client_tel) || ''} />
      <FormShowText name="Gender" value={client_gender || ''} />
      <FormShowText name="Birthday" value={client_birthday || ''} />
    </FormSection>,
    <FormSection heading="LOCATION" key="location">
      <FormShowText value={client_location} />
    </FormSection>,
    <FormSection heading="ABOUT" key="about">
      <FormShowText value={client_bio || ''} />
    </FormSection>,
  ]
}

ClientViewForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default ClientViewForm
