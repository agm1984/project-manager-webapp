import React from 'react'
import PropTypes from 'prop-types'
import { compose, withProps, lifecycle } from 'recompose'
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer,
} from 'react-google-maps'
import styles from './GoogleMapStyles.json'

// FOR ADDITIONAL STYLING
//     See: www.snazzymaps.com
//     and: https://github.com/tomchentw/react-google-maps/issues/53

const GoogleViewWithDirections = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyALtU9hh7leZcwk0sjAmSoshc80UEZyLBo&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      /* eslint-disable no-undef */
      const { currentLat, currentLng } = this.props
      const DirectionsService = new google.maps.DirectionsService()
      DirectionsService.route({
        origin: new google.maps.LatLng(currentLat, currentLng),
        destination: new google.maps.LatLng(49.16478239437476, -123.93997333173832),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          return this.setState({ directions: result })
        }
        return console.error(`Problem fetching directions: ${JSON.stringify(result, null, 2)}`)
      })
    },
  }),
)(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(49.16478239437476, -123.93997333173832)}
    defaultOptions={{ styles }}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap> /* eslint-enable no-undef */
))

GoogleViewWithDirections.propTypes = {
  currentLat: PropTypes.number.isRequired,
  currentLng: PropTypes.number.isRequired,
}

export default GoogleViewWithDirections
