import React from 'react'
import PropTypes from 'prop-types'

const ListView = (props) => {
  const { children } = props
  return (
    <div className="page_container">
      <div className="list_wrapper">
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
