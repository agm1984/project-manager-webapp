import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import { NavLink } from 'react-router-dom'
import { ListPagination, ListActionsMenu } from '../components/'
import { formatTel, formatTime } from '../utils'
import noPhoto from '../../common/images/noPhoto.png'
import './ReactTable.css'

const LeadTable = (props) => {
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
            id: 'lead_avatar',
            accessor: 'lead_avatar',
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
            Header: 'LEAD NAME',
            id: 'lead_fullName',
            accessor: 'lead_fullName',
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              return (
                <NavLink
                  className="table_link-clickable"
                  to={`/admin/leads/view/${_original.lead_serialNumber}`}
                >
                  {`${_original.lead_givenName} ${_original.lead_familyName}`}
                </NavLink>
              )
            },
          },
          {
            Header: 'PHONE',
            id: 'lead_tel',
            accessor: 'lead_tel',
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
            id: 'lead_email',
            accessor: 'lead_email',
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
            id: 'lead_memberType',
            accessor: 'lead_memberType',
          },
          {
            Header: 'JOINED',
            id: 'lead_created',
            accessor: 'lead_created',
            Cell: (cellProps) => {
              const { value } = cellProps
              return formatTime(+value)
            },
            minWidth: 150,
            maxWidth: 150,
          },
          {
            Header: 'STATUS',
            id: 'lead_status',
            accessor: 'lead_status',
            minWidth: 125,
            maxWidth: 125,
          },
          {
            Header: 'ACTIONS',
            id: 'lead_actions',
            accessor: 'lead_actions',
            sortable: false,
            filterable: false,
            Cell: (cellProps) => {
              const { _original } = cellProps.row
              return (
                <ListActionsMenu
                  thingRoute="leads"
                  serialNumber={_original.lead_serialNumber}
                />
              )
            },
            minWidth: 125,
            maxWidth: 125,
          },
        ]}
        defaultSorted={[{ id: 'lead_created', desc: true }]}
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

LeadTable.defaultProps = {
  searchMatches: [],
  data: [],
  bottomData: undefined,
}
LeadTable.propTypes = {
  pageSize: PropTypes.number.isRequired,
  searchMatches: PropTypes.arrayOf(PropTypes.object),
  onChangePage: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  bottomData: PropTypes.objectOf(PropTypes.any),
  noDataText: PropTypes.string.isRequired,
}

export default LeadTable
