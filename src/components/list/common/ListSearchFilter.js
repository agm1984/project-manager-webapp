import React from 'react'
import PropTypes from 'prop-types'

const ListSearchFilter = (props) => {
  const { value, onChangeFilter, placeholder } = props
  return (
    <div className="list_search">
      <input
        className="list_search-input normal form_empty"
        type="text"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={onChangeFilter}
      />
      <div className="list_search-icon">
        <i className="fa fa-e1-search" />
      </div>
    </div>
  )
}

ListSearchFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default ListSearchFilter
