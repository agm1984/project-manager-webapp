import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import { NavLink } from 'react-router-dom'
import { ListPagination, ListActionsMenu } from '../components/'
import { formatTel, formatTime } from '../utils'
import noPhoto from '../../common/images/noPhoto.png'
import './ReactTable.css'

const ClientTable = (props) => {
  const {
    pageSize, searchMatches, onChangePage, activePage,
    isEmpty, data, bottomData, noDataText,
  } = props
  return (
    <div id="table_container">
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
            id: 'client_avatar',
            accessor: 'client_avatar',
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
            Header: 'CLIENT NAME',
            id: 'client_fullName',
            accessor: 'client_fullName',
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              return (
                <NavLink
                  className="table_link-clickable"
                  to={`/admin/clients/view/${_original.client_serialNumber}`}
                >
                  {`${_original.client_givenName} ${_original.client_familyName}`}
                </NavLink>
              )
            },
          },
          {
            Header: 'PHONE',
            id: 'client_tel',
            accessor: 'client_tel',
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
            id: 'client_email',
            accessor: 'client_email',
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
            id: 'client_memberType',
            accessor: 'client_memberType',
          },
          {
            Header: 'JOINED',
            id: 'client_created',
            accessor: 'client_created',
            Cell: (cellProps) => {
              const { value } = cellProps
              return formatTime(+value)
            },
            minWidth: 150,
            maxWidth: 150,
          },
          {
            Header: 'STATUS',
            id: 'client_status',
            accessor: 'client_status',
            minWidth: 125,
            maxWidth: 125,
          },
          {
            Header: 'ACTIONS',
            id: 'client_actions',
            accessor: 'client_actions',
            sortable: false,
            filterable: false,
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              return (
                <ListActionsMenu
                  thingRoute="clients"
                  serialNumber={_original.client_serialNumber}
                />
              )
            },
            minWidth: 125,
            maxWidth: 125,
          },
        ]}
        defaultSorted={[{ id: 'client_created', desc: true }]}
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

ClientTable.defaultProps = {
  searchMatches: [],
  data: [],
  bottomData: undefined,
}
ClientTable.propTypes = {
  pageSize: PropTypes.number.isRequired,
  searchMatches: PropTypes.arrayOf(PropTypes.object),
  onChangePage: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  bottomData: PropTypes.objectOf(PropTypes.any),
  noDataText: PropTypes.string.isRequired,
}

export default ClientTable
