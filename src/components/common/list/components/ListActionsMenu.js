import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton'

const ListActionsMenu = (props) => {
  const { thingRoute, serialNumber } = props
  const MENU_ITEMS = [
    <li key="view">
      <NavLink to={`/admin/${thingRoute}/view/${serialNumber}`}>
        <MenuItem>
          View
        </MenuItem>
      </NavLink>
    </li>,
    <li key="edit">
      <NavLink to={`/admin/${thingRoute}/edit/${serialNumber}`}>
        <MenuItem>
          Edit
        </MenuItem>
      </NavLink>
    </li>,
    <li key="deactivate">
      <NavLink to={`/admin/${thingRoute}/deactivate/${serialNumber}`}>
        <MenuItem>
          Deactivate
        </MenuItem>
      </NavLink>
    </li>,
  ]
  return (
    <Wrapper
      className="list_results-actions"
      onSelection={() => null}
    >
      <Button className="list_results-actions-button">
        <div className="list_results-actions-icon">•••</div>
      </Button>
      <Menu className="list_results-actions-menu">
        <ul>{MENU_ITEMS}</ul>
      </Menu>
    </Wrapper>
  )
}

ListActionsMenu.defaultProps = {
  serialNumber: undefined,
}
ListActionsMenu.propTypes = {
  thingRoute: PropTypes.string.isRequired,
  serialNumber: PropTypes.string,
}

export default ListActionsMenu
