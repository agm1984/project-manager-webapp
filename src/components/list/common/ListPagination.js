import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListPageControls from './ListPageControls'
import ListPageNumbers from './ListPageNumbers'

class ListPaginationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pager: {},
    }
  }
  componentDidMount() {
    if (this.props.items && this.props.items.length) {
      return this.setPage(1)
    }
    if (this.props.activePage) {
      return this.setPage(this.props.activePage + 1)
    }
    return null
  }
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      return this.setPage(1)
    }
    return null
  }
  setPage(page) {
    const { items } = this.props
    const { pager } = this.state
    if (!page || page > pager.totalPages) {
      return null
    }
    const newPager = this.getPager(items.length, page)
    return this.setState({ pager: newPager }, () => this.props.onChangePage(newPager))
  }
  getPager(totalItems, currentPage, pageSize) {
    const newCurrentPage = currentPage || 1
    const newPageSize = pageSize || this.props.pageSize
    const newTotalPages = Math.ceil(totalItems / newPageSize)
    const calcStartPage = () => {
      if (newTotalPages <= 10) return 1
      if (newCurrentPage <= 6) return 1
      if (newCurrentPage + 4 >= newTotalPages) return newTotalPages - 9
      return newCurrentPage - 5
    }
    const calcEndPage = () => {
      if (newTotalPages <= 10) return newTotalPages
      if (newCurrentPage <= 6) return 10
      if (newCurrentPage + 4 >= newTotalPages) return newTotalPages
      return newCurrentPage + 4
    }
    const startPage = calcStartPage(newCurrentPage, newTotalPages)
    const endPage = calcEndPage(newCurrentPage, newTotalPages)
    const startIndex = (newCurrentPage - 1) * newPageSize
    const endIndex = Math.min((startIndex + newPageSize) - 1, totalItems - 1)
    const range = (start, end) => (
      Array.from(Array((end - start) + 1).keys()).map(i => i + start)
    )
    const pages = range(startPage, endPage)
    return {
      totalItems,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
      currentPage: newCurrentPage,
      pageSize: newPageSize,
      totalPages: newTotalPages,
    }
  }
  render() {
    const { bottom, isEmpty } = this.props
    const pager = (this.props.bottom) ? this.props.bottomData : this.state.pager
    const {
      startIndex, endIndex, totalItems, totalPages, pages,
    } = pager
    // SINGLE PAGE OF RESULTS
    if (totalPages === 1) {
      if (!Object.keys(pager).length) {
        return null
      }
      return (
        <div
          className="list_pagination"
          style={bottom && ({ paddingTop: '0rem' })}
        >
          <ListPageNumbers
            isBottom={bottom}
            startIndex={startIndex}
            endIndex={endIndex}
            totalItems={totalItems}
          />
        </div>
      )
    }
    // NO RESULTS
    if (isEmpty || (!pages || pages.length <= 1)) {
      return (
        <div
          className="list_pagination"
          style={bottom && ({ paddingTop: '0rem' })}
        >
          <ListPageNumbers isEmpty />
        </div>
      )
    }
    // MULTI-PAGE RESULTS
    return (
      <div
        className="list_pagination"
        style={bottom && ({ paddingTop: '0rem' })}
      >
        <ListPageNumbers
          isBottom={bottom}
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={totalItems}
        />
        <div className="list_pagination-divider" />
        <ListPageControls
          pager={pager}
          onPageClick={page => this.setPage(page)}
        />
      </div>
    )
  }
}

ListPaginationContainer.defaultProps = {
  items: [],
  bottom: undefined,
  bottomData: undefined,
  isEmpty: undefined,
}
ListPaginationContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  pageSize: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  bottom: PropTypes.bool,
  bottomData: PropTypes.shape({
    totalItems: PropTypes.number,
    startPage: PropTypes.number,
    endPage: PropTypes.number,
    startIndex: PropTypes.number,
    endIndex: PropTypes.number,
    pages: PropTypes.array,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    totalPages: PropTypes.number,
  }),
  activePage: PropTypes.number.isRequired,
  isEmpty: PropTypes.bool,
}

export default ListPaginationContainer
