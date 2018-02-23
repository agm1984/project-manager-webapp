import React from 'react'
import PropTypes from 'prop-types'
// import Nav from '../nav/Nav'
import Nav from '../../nav/Nav'
import './List.css'
import './ReactTable.css'

const ListView = (props) => {
  const { children } = props
  return (
    <div id="list-container" key="ListView">
      <div id="list-wrapper">
        <Nav key="Nav" />
        {children}
      </div>
    </div>
  )
}

ListView.defaultProps = {
  children: undefined,
}
ListView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default ListView
