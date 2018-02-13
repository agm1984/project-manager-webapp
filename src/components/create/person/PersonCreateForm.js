import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import {
  CreateSection,
  CreateInput,
  CreateListSelect,
  CreateGeoSuggest,
  CreateCheckbox,
  CreateTextArea,
} from '../common'
import validate from './person_create_validator'

const CreatePersonForm = (props) => {
  const {
    handleSubmit, onCreateSubmit, handleBackPress, pristine, submitting,
  } = props
  return (
    <form
      onSubmit={handleSubmit(onCreateSubmit)}
      autoComplete="off"
    >
      <CreateSection isTop heading="MEMBERSHIP">
        <Field
          label="Status"
          component={CreateListSelect}
          name="person_status"
          placeholder="Select Status"
          options={['Active', 'Inactive', 'Suspended', 'Banned']}
          required
        />
        <Field
          label="Member Type"
          component={CreateListSelect}
          name="person_memberType"
          placeholder="Select Member Type"
          options={['Free', 'Tier 1', 'Tier 2', 'Tier 3']}
          required
        />
        <Field
          label="Can Be Emailed?"
          component={CreateCheckbox}
          name="person_canBeEmailed"
        />
      </CreateSection>
      <CreateSection heading="DETAILS">
        <Field
          label="Avatar URL"
          component={CreateInput}
          type="text"
          name="person_avatar"
          placeholder=""
        />
        <Field
          label="First Name"
          component={CreateInput}
          type="text"
          name="person_givenName"
          placeholder=""
          required
        />
        <Field
          label="Last Name"
          component={CreateInput}
          type="text"
          name="person_familyName"
          placeholder=""
          required
        />
        <Field
          label="Email"
          component={CreateInput}
          type="text"
          name="person_email"
          placeholder=""
          required
        />
        <Field
          label="Phone"
          component={CreateInput}
          type="number"
          name="person_tel"
          placeholder=""
        />
        <Field
          label="Gender"
          component={CreateListSelect}
          name="person_gender"
          placeholder="Select Gender"
          options={['Male', 'Female', 'LBGT']}
        />
        <Field
          label="Birthday"
          component={CreateListSelect}
          name="person_birthday"
          placeholder="Select Birthday"
          options={['n/a']}
        />
        <Field
          label="Password"
          component={CreateInput}
          type="password"
          name="person_password"
          placeholder=""
          required
        />
        <Field
          label="Confirm Password"
          component={CreateInput}
          type="password"
          name="person_confirmPassword"
          placeholder=""
          required
        />
      </CreateSection>
      <CreateSection heading="LOCATION">
        <Field
          label=""
          component={CreateGeoSuggest}
          name="person_location"
          placeholder="Enter Location"
        />
      </CreateSection>
      <CreateSection heading="ABOUT">
        <Field
          label=""
          component={CreateTextArea}
          name="person_bio"
          placeholder="This is about text..."
        />
      </CreateSection>
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
            CREATE
          </button>
        </div>
      </div>
    </form>
  )
}

CreatePersonForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onCreateSubmit: PropTypes.func.isRequired,
  handleBackPress: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  untouch: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({ validate, form: 'CreatePersonForm' })(CreatePersonForm)
