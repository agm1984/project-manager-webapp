import React from 'react'
import PropTypes from 'prop-types'
import './List.css'

const ListView = (props) => {
  const { children } = props
  return (
    <div id="list-container">
      <div id="list-wrapper">
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
