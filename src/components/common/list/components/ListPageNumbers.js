import React from 'react'
import PropTypes from 'prop-types'

const ListPageNumbers = (props) => {
  const {
    isEmpty, startIndex, endIndex, totalItems,
  } = props
  if (isEmpty) {
    return [
      <div
        key={0}
        className="list_pagination-pageInfo"
        style={{ height: '1.4rem', padding: '1.4rem 0 1.4rem 0' }}
      />,
      <div key={1} className="list_pagination-divider" />,
    ]
  }
  return [
    <div
      key={0}
      className="list_pagination-pageInfo"
      style={{ padding: '1.4rem 0 1.4rem 0' }}
    >
      <span className="list_pagination-number">
        {startIndex + 1}
      </span>
      <span className="list_pagination-dash">-</span>
      <span className="list_pagination-number">
        {endIndex + 1}
      </span>
      <span className="list_pagination-pad">of</span>
      <span className="list_pagination-number">
        {totalItems}
      </span>
    </div>,
    <div key={1} className="list_pagination-divider" />,
  ]
}

ListPageNumbers.defaultValues = {
  isEmpty: undefined,
  startIndex: 0,
  endIndex: 0,
  totalItems: 0,
}
ListPageNumbers.propTypes = {
  isEmpty: PropTypes.bool,
  startIndex: PropTypes.number,
  endIndex: PropTypes.number,
  totalItems: PropTypes.number,
}

export default ListPageNumbers
