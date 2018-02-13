import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import { NavLink } from 'react-router-dom'
import { ListPagination, ListActionsMenu } from '../common'
import { formatTime } from '../utils'

const ArticleTable = (props) => {
  const {
    pageSize, searchMatches, onChangePage, activePage,
    isEmpty, data, bottomData, noDataText,
  } = props
  return (
    <div className="list_container">
      <ListPagination
        pageSize={pageSize}
        items={searchMatches}
        onChangePage={onChangePage}
        activePage={activePage}
        isEmpty={isEmpty}
      />
      <ReactTable
        data={data}
        page={activePage}
        pageSize={pageSize}
        showPaginationBottom={false}
        className="-striped -highlight"
        filterable={false}
        noDataText={noDataText}
        columns={[
          {
            Header: 'TITLE',
            id: 'article_title',
            accessor: 'article_title',
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              return (
                <NavLink
                  className="table_link-clickable"
                  to={`/admin/articles/view/${_original.article_slug}`}
                >
                  {_original.article_title.substring(0, 40)}
                </NavLink>
              )
            },
            minWidth: 200,
          },
          {
            Header: 'TAGS',
            id: 'article_tags',
            accessor: 'article_tags',
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              if (_original.article_tags === undefined) {
                return null
              }
              return (
                <div>
                  {_original.article_tags.map(tag => tag.tag_name).sort().join(', ')}
                </div>
              )
            },
          },
          {
            Header: 'AUTHOR',
            id: 'article_author',
            accessor: 'article_author',
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              return (
                <NavLink
                  className="table_link-clickable"
                  to={`/admin/people/view/${_original.article_author.person_serialNumber}`}
                >
                  {`${_original.article_author.person_givenName} ${_original.article_author.person_familyName}`}
                </NavLink>
              )
            },
          },
          {
            Header: 'CREATED',
            id: 'article_created',
            accessor: 'article_created',
            Cell: (cellProps) => {
              const { value } = cellProps
              return formatTime(+value)
            },
            minWidth: 150,
            maxWidth: 150,
          },
          {
            Header: 'STATUS',
            id: 'article_status',
            accessor: 'article_status',
            minWidth: 125,
            maxWidth: 125,
          },
          {
            Header: 'ACTIONS',
            id: 'article_actions',
            accessor: 'article_actions',
            sortable: false,
            filterable: false,
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              return (
                <ListActionsMenu
                  thingRoute="articles"
                  serialNumber={_original.article_slug}
                />
              )
            },
            minWidth: 125,
            maxWidth: 125,
          },
        ]}
        defaultSorted={[{ id: 'article_created', desc: true }]}
      />
      <ListPagination
        pageSize={pageSize}
        items={searchMatches}
        onChangePage={onChangePage}
        activePage={activePage}
        isEmpty={isEmpty}
        bottomData={bottomData}
        bottom
      />
    </div>
  )
}

ArticleTable.defaultProps = {
  bottomData: undefined,
}
ArticleTable.propTypes = {
  pageSize: PropTypes.number.isRequired,
  searchMatches: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangePage: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  bottomData: PropTypes.objectOf(PropTypes.any),
  noDataText: PropTypes.string.isRequired,
}


export default ArticleTable
