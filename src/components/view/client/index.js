import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack, push } from 'react-router-redux'
import { withApollo } from 'react-apollo'
import {
  GetView, GetSubNav, GetErrors, GetSection,
  GetThumbnail, GetField, GetEmail, GetBackLink,
} from '../common'
import { formatTel, formatTime } from '../utils'
import GET_PERSON_QUERY from './person_view_queries'

class PersonViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: {},
      serverErrors: [],
    }
  }

  /**
   * When the Component mounts, the Person should be retrieved from the server.
   */
  async componentDidMount() {
    window.scrollTo(0, 0)
    return this.getPerson(this.props.match.params.person_serialNumber)
  }

  /**
   * When the Person's details are retrieved, they are stored in the local
   * Component's state
   * @param {String} person_serialNumber Person's unique identifier (Serial)
   */
  async getPerson(person_serialNumber) {
    try {
      const res = await this.props.client.query({
        query: GET_PERSON_QUERY,
        variables: { person_serialNumber },
      })
      const { getPerson } = res.data
      return this.setState({ record: getPerson })
    } catch (e) {
      return this.setState({ serverErrors: ['Problem getting person record.'] })
    }
  }

  /**
   * When the Edit Button is pressed, the user should be navigated to the Edit Person View
   */
  handleEdit() {
    return this.props.dispatch(push(`/admin/people/edit/${this.props.match.params.person_serialNumber}`))
  }

  render() {
    if (!Object.keys(this.state.record).length) {
      return <GetView />
    }
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
    } = this.state.record
    return (
      <GetView>
        <GetSubNav
          type="Person"
          recordLabel={`${person_givenName.toUpperCase()} ${person_familyName.toUpperCase()}`}
          recordStatus={person_status.toUpperCase()}
          onClickEdit={() => this.handleEdit()}
        />
        <GetErrors errors={this.state.serverErrors} />
        <GetSection isTop heading="MEMBERSHIP">
          <GetField name="Status" value={person_status} />
          <GetField name="Joined" value={formatTime(+person_created)} />
          <GetField name="Member Type" value={person_memberType} />
          <GetField
            name="Can Be Emailed?"
            value={(person_canBeEmailed === null)
              ? 'unspecified'
              : person_canBeEmailed.toString()}
          />
        </GetSection>
        <GetSection heading="DETAILS">
          <GetThumbnail value={person_avatar || ''} />
          <GetField name="First Name" value={person_givenName} />
          <GetField name="Last Name" value={person_familyName} />
          <GetEmail name="Email" value={person_email} />
          <GetField name="Phone" value={formatTel(person_tel) || ''} />
          <GetField name="Gender" value={person_gender || ''} />
          <GetField name="Birthday" value={person_birthday || ''} />
        </GetSection>
        <GetSection heading="LOCATION">
          <GetField value={person_location} />
        </GetSection>
        <GetSection heading="ABOUT">
          <GetField value={person_bio || ''} />
        </GetSection>
        <GetBackLink onLinkPress={() => this.props.dispatch(goBack())} />
      </GetView>
    )
  }
}

PersonViewContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ person_serialNumber: PropTypes.string }),
  }).isRequired,
  client: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(withApollo(PersonViewContainer))
