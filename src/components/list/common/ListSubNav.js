import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './List.css'

const ListSubNav = (props) => {
  const {
    createURL, type, onClickToggle, isFilteringInactive,
  } = props
  return (
    <div id="list_subnav">
      <NavLink to={createURL} className="list_subnav-link">
          Add a New {type}
      </NavLink>
      <div style={{ width: '3.2rem' }} />
      <button
        className="list_subnav-link"
        onClick={onClickToggle}
      >
        {(!isFilteringInactive) ? 'Show Inactive' : 'Show All'}
      </button>
    </div>
  )
}

ListSubNav.propTypes = {
  createURL: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClickToggle: PropTypes.func.isRequired,
  isFilteringInactive: PropTypes.bool.isRequired,
}

export default ListSubNav
