import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import { NavLink } from 'react-router-dom'
import { ListPagination, ListActionsMenu } from '../common'
import { formatTel, formatTime } from '../utils'
import noPhoto from '../images/noPhoto.png'

const PersonTable = (props) => {
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
            Header: '',
            id: 'person_avatar',
            accessor: 'person_avatar',
            sortable: false,
            filterable: false,
            Cell: (cellProps) => {
              const { value } = cellProps
              return (
                <img
                  className="table_row_thumbnail"
                  alt="Avatar Thumbnail"
                  src={(!value) ? noPhoto : value}
                />
              )
            },
            minWidth: 50,
            maxWidth: 100,
          },
          {
            Header: 'NAME',
            id: 'person_fullName',
            accessor: 'person_fullName',
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              return (
                <NavLink
                  className="table_link-clickable"
                  to={`/admin/people/view/${_original.person_serialNumber}`}
                >
                  {`${_original.person_givenName} ${_original.person_familyName}`}
                </NavLink>
              )
            },
          },
          {
            Header: 'PHONE',
            id: 'person_tel',
            accessor: 'person_tel',
            Cell: (cellProps) => {
              const { value } = cellProps
              if (!value) {
                return 'None'
              }
              return formatTel(value)
            },
          },
          {
            Header: 'EMAIL',
            id: 'person_email',
            accessor: 'person_email',
            Cell: (cellProps) => {
              const { value } = cellProps
              return (
                <a className="table_link-clickable" href={`mailto:${value}`}>
                  {value}
                </a>
              )
            },
          },
          {
            Header: 'TYPE',
            id: 'person_memberType',
            accessor: 'person_memberType',
          },
          {
            Header: 'JOINED',
            id: 'person_created',
            accessor: 'person_created',
            Cell: (cellProps) => {
              const { value } = cellProps
              return formatTime(+value)
            },
            minWidth: 150,
            maxWidth: 150,
          },
          {
            Header: 'STATUS',
            id: 'person_status',
            accessor: 'person_status',
            minWidth: 125,
            maxWidth: 125,
          },
          {
            Header: 'ACTIONS',
            id: 'person_actions',
            accessor: 'person_actions',
            sortable: false,
            filterable: false,
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              return (
                <ListActionsMenu
                  thingRoute="people"
                  serialNumber={_original.person_serialNumber}
                />
              )
            },
            minWidth: 125,
            maxWidth: 125,
          },
        ]}
        defaultSorted={[{ id: 'person_created', desc: true }]}
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

PersonTable.defaultProps = {
  bottomData: undefined,
}
PersonTable.propTypes = {
  pageSize: PropTypes.number.isRequired,
  searchMatches: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangePage: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  bottomData: PropTypes.objectOf(PropTypes.any),
  noDataText: PropTypes.string.isRequired,
}

export default PersonTable
