import React from 'react'
// import PropTypes from 'prop-types'
import { compose, withProps } from 'recompose'
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps'
import styles from './GoogleMapStyles.json'

// FOR ADDITIONAL STYLING
//     See: www.snazzymaps.com
//     and: https://github.com/tomchentw/react-google-maps/issues/53

const GoogleView = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyALtU9hh7leZcwk0sjAmSoshc80UEZyLBo&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(() => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 49.16598239437476, lng: -123.92517333173832 }}
    defaultOptions={{ styles }}
  >
    {<Marker
      position={{ lat: 49.16478239437476, lng: -123.93997333173832 }}
    />}
  </GoogleMap>
))

export default GoogleView
