import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import GET_ME_QUERY from './profile_queries'
import formatTime from './utils'
import noPhoto from './images/noPhoto.png'

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
        serverErrors: ['Problem getting person record.'],
      })
    }
  }
  render() {
    if (this.state.serverErrors.length) {
      return (
        <div id="profile_wrapper">
          <div id="profile_container">
            {this.state.serverErrors}
          </div>
        </div>
      )
    }
    if (!Object.keys(this.state.record).length) {
      return (
        <div id="profile_wrapper">
          <div id="profile_container">
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
      <div id="profile_wrapper">
        <div id="profile_container">
          <div id="profile_form">
            <div id="profile_pic-container">
              <img
                id="profile_pic"
                src={(!person_avatar) ? noPhoto : person_avatar}
                alt="Avatar"
              />
            </div>
            <div id="profile_name">{`${person_givenName} ${person_familyName}`}</div>
            <div className="view_row">
              <div className="view_row-label">Email</div>
              <div className="view_row-item">{person_email}</div>
            </div>
            <div className="view_row">
              <div className="view_row-label">Location</div>
              <div className="view_row-item">{person_location}</div>
            </div>
            <div className="view_row">
              <div className="view_row-label">Joined</div>
              <div className="view_row-item">{formatTime(+person_created)}</div>
            </div>
            <div className="view_row">
              <div className="view_row-label">Member Type</div>
              <div className="view_row-item">{person_memberType}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  client: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect()(withApollo(Profile))
