import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import {
  FormSection, FormInput, FormSelect,
  FormGeoSuggest, FormCheckbox, FormTextArea,
} from '../../common'
import compareObjectStates from '../utils'
// import validate from './lead_edit_validator'

class LeadsEditForm extends Component {
  readyToSubmit = (updatedProps) => {
    const { initialValues, onEditSubmit } = this.props
    const changedValues = compareObjectStates(initialValues, updatedProps)
    const { lead_password } = updatedProps
    onEditSubmit({
      ...changedValues,
      lead_password,
      lead_serialNumber: initialValues.lead_serialNumber,
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
            name="lead_status"
            placeholder="Select Status"
            options={['Active', 'Inactive', 'Suspended', 'Banned']}
            required
          />
          <Field
            label="Member Type"
            component={FormSelect}
            name="lead_memberType"
            placeholder="Select Member Type"
            options={['Free', 'Tier 1', 'Tier 2', 'Tier 3']}
            required
          />
          <Field
            label="Can Be Emailed?"
            component={FormCheckbox}
            name="lead_canBeEmailed"
          />
        </FormSection>
        <FormSection heading="DETAILS">
          <Field
            label="Avatar URL"
            component={FormInput}
            type="text"
            name="lead_avatar"
            placeholder=""
          />
          <Field
            label="First Name"
            component={FormInput}
            type="text"
            name="lead_givenName"
            placeholder=""
            required
          />
          <Field
            label="Last Name"
            component={FormInput}
            type="text"
            name="lead_familyName"
            placeholder=""
            required
          />
          <Field
            label="Email"
            component={FormInput}
            type="text"
            name="lead_email"
            placeholder=""
            required
          />
          <Field
            label="Phone"
            component={FormInput}
            type="number"
            name="lead_tel"
            placeholder=""
          />
          <Field
            label="Gender"
            component={FormSelect}
            name="lead_gender"
            placeholder="Select Gender"
            options={['Male', 'Female', 'LBGT']}
          />
          <Field
            label="Birthday"
            component={FormSelect}
            name="lead_birthday"
            placeholder="Select Birthday"
            options={['n/a']}
          />
          <Field
            label="Password"
            component={FormInput}
            type="password"
            name="lead_password"
            placeholder=""
            required
          />
          <Field
            label="Confirm Password"
            component={FormInput}
            type="password"
            name="lead_confirmPassword"
            placeholder=""
            required
          />
        </FormSection>
        <FormSection heading="LOCATION">
          <Field
            label=""
            component={FormGeoSuggest}
            name="lead_location"
            placeholder="Enter Location"
          />
        </FormSection>
        <FormSection heading="ABOUT">
          <Field
            label=""
            component={FormTextArea}
            name="lead_bio"
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

LeadsEditForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  handleBackPress: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({ /*validate,*/ form: 'LeadsEditForm' })(LeadsEditForm)
