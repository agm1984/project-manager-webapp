import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import {
  FormSection, FormInput, FormSelect,
  FormGeoSuggest, FormCheckbox, FormTextArea,
} from '../../common'
import compareObjectStates from '../utils'
// import validate from './person_edit_validator'

class PersonEditForm extends Component {
  readyToSubmit = (updatedProps) => {
    const { initialValues, onEditSubmit } = this.props
    const changedValues = compareObjectStates(initialValues, updatedProps)
    const { person_password } = updatedProps
    onEditSubmit({
      ...changedValues,
      person_password,
      person_serialNumber: initialValues.person_serialNumber,
    })
  }

  render() {
    const {
      handleSubmit, handleBackPress, pristine, submitting,
    } = this.props
    return (
      <form
        onSubmit={handleSubmit(this.readyToSubmit)}
        autoComplete="off"
      >
        <FormSection isTop heading="MEMBERSHIP">
          <Field
            label="Status"
            component={FormSelect}
            name="person_status"
            placeholder="Select Status"
            options={['Active', 'Inactive', 'Suspended', 'Banned']}
            required
          />
          <Field
            label="Member Type"
            component={FormSelect}
            name="person_memberType"
            placeholder="Select Member Type"
            options={['Free', 'Tier 1', 'Tier 2', 'Tier 3']}
            required
          />
          <Field
            label="Can Be Emailed?"
            component={FormCheckbox}
            name="person_canBeEmailed"
          />
        </FormSection>
        <FormSection heading="DETAILS">
          <Field
            label="Avatar URL"
            component={FormInput}
            type="text"
            name="person_avatar"
            placeholder=""
          />
          <Field
            label="First Name"
            component={FormInput}
            type="text"
            name="person_givenName"
            placeholder=""
            required
          />
          <Field
            label="Last Name"
            component={FormInput}
            type="text"
            name="person_familyName"
            placeholder=""
            required
          />
          <Field
            label="Email"
            component={FormInput}
            type="text"
            name="person_email"
            placeholder=""
            required
          />
          <Field
            label="Phone"
            component={FormInput}
            type="number"
            name="person_tel"
            placeholder=""
          />
          <Field
            label="Gender"
            component={FormSelect}
            name="person_gender"
            placeholder="Select Gender"
            options={['Male', 'Female', 'LBGT']}
          />
          <Field
            label="Birthday"
            component={FormSelect}
            name="person_birthday"
            placeholder="Select Birthday"
            options={['n/a']}
          />
          <Field
            label="Password"
            component={FormInput}
            type="password"
            name="person_password"
            placeholder=""
            required
          />
          <Field
            label="Confirm Password"
            component={FormInput}
            type="password"
            name="person_confirmPassword"
            placeholder=""
            required
          />
        </FormSection>
        <FormSection heading="LOCATION">
          <Field
            label=""
            component={FormGeoSuggest}
            name="person_location"
            placeholder="Enter Location"
          />
        </FormSection>
        <FormSection heading="ABOUT">
          <Field
            label=""
            component={FormTextArea}
            name="person_bio"
            placeholder="This is about text..."
          />
        </FormSection>
        <div id="form_buttons-container">
          <div id="form_buttons">
            <button
              disabled={submitting}
              id="form_button-cancel"
              onClick={handleBackPress}
            >
              CANCEL
            </button>
            <button
              disabled={pristine || submitting}
              id="form_button-submit"
              type="submit"
            >
              UPDATE
            </button>
          </div>
        </div>
      </form>
    )
  }
}

PersonEditForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  handleBackPress: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({ /*validate,*/ form: 'PersonEditForm' })(PersonEditForm)
