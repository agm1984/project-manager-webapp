import React from 'react'
import PropTypes from 'prop-types'

const ListPageControls = (props) => {
  const { pager, onPageClick } = props
  const { currentPage, totalPages, pages } = pager
  return (
    <ul className="list_pagination-controls">
      <div className="list_pagination-buttons">
        <li className={(currentPage === 1) ? 'list_pagination-inactive' : ''}>
          <button onClick={() => (currentPage !== 1) && onPageClick(1)}>
            Start
          </button>
        </li>
        <li className={(currentPage === 1) ? 'list_pagination-inactive' : ''}>
          <button onClick={() => (currentPage !== 1) && onPageClick(currentPage - 1)}>
            Back
          </button>
        </li>
      </div>
      <div className="list_pagination-pages">
        {pages.map(page => (
          <li key={page} className={(currentPage === page) ? 'list_pagination-active' : ''}>
            <button onClick={() => (currentPage !== page) && onPageClick(page)}>
              {page}
            </button>
          </li>
        ))}
      </div>
      <div className="list_pagination-buttons">
        <li className={(currentPage === totalPages) ? 'list_pagination-inactive' : ''}>
          <button onClick={() => (currentPage !== totalPages) && onPageClick(currentPage + 1)}>
            Next
          </button>
        </li>
        <li className={(currentPage === totalPages) ? 'list_pagination-inactive' : ''}>
          <button onClick={() => (currentPage !== totalPages) && onPageClick(totalPages)}>
            End
          </button>
        </li>
      </div>
    </ul>
  )
}

ListPageControls.propTypes = {
  pager: PropTypes.shape({
    totalItems: PropTypes.number,
    startPage: PropTypes.number,
    endPage: PropTypes.number,
    startIndex: PropTypes.number,
    endIndex: PropTypes.number,
    pages: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
    totalPages: PropTypes.number.isRequired,
  }).isRequired,
  onPageClick: PropTypes.func.isRequired,
}

export default ListPageControls
