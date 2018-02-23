import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import {
  UpdateSection, UpdateInput, UpdateListSelect,
  UpdateGeoSuggest, UpdateCheckbox, UpdateTextArea,
} from '../common'
import validate from './person_edit_validator'

const PersonEditForm = (props) => {
  const {
    handleSubmit, onEditSubmit, handleBackPress, pristine, submitting,
  } = props
  return (
    <form
      onSubmit={handleSubmit(onEditSubmit)}
      autoComplete="off"
    >
      <UpdateSection isTop heading="MEMBERSHIP">
        <Field
          label="Status"
          component={UpdateListSelect}
          name="person_status"
          placeholder="Select Status"
          options={['Active', 'Inactive', 'Suspended', 'Banned']}
          required
        />
        <Field
          label="Member Type"
          component={UpdateListSelect}
          name="person_memberType"
          placeholder="Select Member Type"
          options={['Free', 'Tier 1', 'Tier 2', 'Tier 3']}
          required
        />
        <Field
          label="Can Be Emailed?"
          component={UpdateCheckbox}
          name="person_canBeEmailed"
        />
      </UpdateSection>
      <UpdateSection heading="DETAILS">
        <Field
          label="Avatar URL"
          component={UpdateInput}
          type="text"
          name="person_avatar"
          placeholder=""
        />
        <Field
          label="First Name"
          component={UpdateInput}
          type="text"
          name="person_givenName"
          placeholder=""
          required
        />
        <Field
          label="Last Name"
          component={UpdateInput}
          type="text"
          name="person_familyName"
          placeholder=""
          required
        />
        <Field
          label="Email"
          component={UpdateInput}
          type="text"
          name="person_email"
          placeholder=""
          required
        />
        <Field
          label="Phone"
          component={UpdateInput}
          type="number"
          name="person_tel"
          placeholder=""
        />
        <Field
          label="Gender"
          component={UpdateListSelect}
          name="person_gender"
          placeholder="Select Gender"
          options={['Male', 'Female', 'LBGT']}
        />
        <Field
          label="Birthday"
          component={UpdateListSelect}
          name="person_birthday"
          placeholder="Select Birthday"
          options={['n/a']}
        />
        <Field
          label="Password"
          component={UpdateInput}
          type="password"
          name="person_password"
          placeholder=""
          required
        />
        <Field
          label="Confirm Password"
          component={UpdateInput}
          type="password"
          name="person_confirmPassword"
          placeholder=""
          required
        />
      </UpdateSection>
      <UpdateSection heading="LOCATION">
        <Field
          label=""
          component={UpdateGeoSuggest}
          name="person_location"
          placeholder="Enter Location"
        />
      </UpdateSection>
      <UpdateSection heading="ABOUT">
        <Field
          label=""
          component={UpdateTextArea}
          name="person_bio"
          placeholder="This is about text..."
        />
      </UpdateSection>
      <div className="edit_button-container">
        <div className="edit_buttons">
          <button
            disabled={submitting}
            className="edit_button-grey"
            onClick={handleBackPress}
          >
            CANCEL
          </button>
          <button
            disabled={pristine || submitting}
            className="edit_button-red"
            type="submit"
          >
            UPDATE
          </button>
        </div>
      </div>
    </form>
  )
}

PersonEditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  handleBackPress: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({ validate, form: 'PersonEditForm' })(PersonEditForm)
