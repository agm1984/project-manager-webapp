import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import {
  FormView, FormSection, FormShowText, FormShowEmail, FormShowImage,
} from '../common/forms/common'
import GET_ME_QUERY from './profile_queries'
import formatTime from './utils'
import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: {},
      serverErrors: [],
    }
  }

  /**
   * The currently signed in user's details should be retrieved from the server
   * when he/she lands on the Profile View.
   */
  async componentDidMount() {
    window.scrollTo(0, 0)
    return this.getMe()
  }

  async getMe() {
    try {
      const res = await this.props.client.query({
        query: GET_ME_QUERY,
      })
      const { me } = res.data
      return this.setState({ record: me })
    } catch (e) {
      return this.setState({
        serverErrors: ['Problem getting your data from the server.'],
      })
    }
  }

  render() {
    if (this.state.serverErrors.length) {
      return (
        <div id="profile-wrapper">
          <div id="profile-container">
            {this.state.serverErrors}
          </div>
        </div>
      )
    }
    if (!Object.keys(this.state.record).length) {
      return (
        <div id="profile-wrapper">
          <div id="profile-container">
            Loading...
          </div>
        </div>
      )
    }
    const {
      person_avatar,
      person_givenName,
      person_familyName,
      person_email,
      person_location,
      person_created,
      person_memberType,
    } = this.state.record
    return (
      <FormView>
        <div style={{ height: 200 }} />
        <FormSection heading={`${person_givenName.toUpperCase()} ${person_familyName.toUpperCase()}`} key="details">
          <FormShowImage value={person_avatar || ''} />
          <FormShowEmail name="Email" value={person_email} />
          <FormShowText name="Location" value={person_location} />
          <FormShowText name="Joined" value={formatTime(+person_created) || ''} />
          <FormShowText name="Member Type" value={person_memberType || ''} />
        </FormSection>
      </FormView>
    )
  }
}

Profile.propTypes = {
  client: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect()(withApollo(Profile))
