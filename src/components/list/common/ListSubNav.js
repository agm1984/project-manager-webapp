import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const ListSubNav = (props) => {
  const {
    createURL, type, onClickToggle, isFilteringInactive,
  } = props
  return (
    <div className="list_subnav">
      <NavLink to={createURL} className="list_subnav_link">
          Add a New {type}
      </NavLink>
      <div className="list_subnav_menu-spacer">|</div>
      <button
        className="list_subnav_link"
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
