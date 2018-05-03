import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'react-apollo'
import ServerErrors from '../common/components/ServerErrors'
import {
  ListView, ListSubNav, ListSearchFilter,
} from './components'
import { customFind } from './utils'
import listTables from './tables'
import getTypeReference from '../utils/getTypeReferences'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInactive: false,
      activePage: 0,
      pagination: {},
      search: '',
      searchOptions: {
        caseSensitive: false,
        excludedKeys: ['person_avatar'],
      },
      searchMatches: [],
      serverErrors: [],
    }
  }

  componentDidMount() {
    return window.scrollTo(0, 0)
  }

  getListToRender() {
    const { data, listQueryName } = this.props
    const { searchMatches, search } = this.state
    if (!searchMatches.length && !search) {
      return data[listQueryName]
    }
    return searchMatches
  }

  getTotalPages() {
    const { data, listQueryName } = this.props
    const { searchMatches } = this.state
    if (!searchMatches.length) {
      return Math.ceil(data[listQueryName].length / 10)
    }
    return Math.ceil(searchMatches.length / 10)
  }

  handleFilterChange({ target: { value } }) {
    const { data, listQueryName } = this.props
    const { searchOptions } = this.state
    return this.setState({
      search: value,
      searchMatches: customFind(data[listQueryName], value, searchOptions),
    })
  }

  handlePageChange(pager) {
    return this.setState({
      activePage: pager.currentPage - 1,
      pagination: pager,
    })
  }

  toggleInactive() {
    const { data, listQueryName } = this.props
    const { showInactive, searchOptions } = this.state
    return this.setState({
      showInactive: !showInactive,
      searchMatches: (!showInactive)
        ? customFind(data[listQueryName], 'Inactive', searchOptions)
        : [],
    })
  }

  renderTable = () => {
    const { fromRouter, data, listQueryName } = this.props
    const { type } = fromRouter
    const {
      activePage, pagination, search, searchMatches,
    } = this.state
    // TODO: Improve UX when table is empty
    const withTheseProps = {
      activePage,
      pageSize: (search.length > 0 && searchMatches.length === 0) ? 7 : 25,
      searchMatches: (!searchMatches.length) ? data[listQueryName] : searchMatches,
      onChangePage: pagerState => this.handlePageChange(pagerState),
      isEmpty: (search.length > 0 && searchMatches.length === 0),
      data: this.getListToRender(),
      bottomData: pagination,
      noDataText: `No ${getTypeReference({
        type,
        hasWhichNumber: 'plural',
        hasWhichCase: 'uppercase',
      })} to Show`,
    }
    return React.createElement(listTables[type], { ...withTheseProps }, null)
  }

  render() {
    if (this.props.data.loading) {
      return null
    }
    const { type } = this.props.fromRouter
    const { showInactive, search } = this.state
    return (
      <ListView>
        <ListSubNav
          createURL={`/admin/${type}/create`}
          type={getTypeReference({
            type,
            hasWhichNumber: 'singular',
            hasWhichCase: 'uppercase',
          })}
          onClickToggle={() => this.toggleInactive()}
          isFilteringInactive={showInactive}
        />
        <ListSearchFilter
          value={search}
          onChangeFilter={e => this.handleFilterChange(e)}
          placeholder={`Search ${getTypeReference({
            type,
            hasWhichNumber: 'plural',
            hasWhichCase: 'uppercase',
          })}...`}
        />
        <ServerErrors
          errors={this.state.serverErrors}
          style={{ marginTop: '3.2rem' }}
        />
        {this.renderTable()}
      </ListView>
    )
  }
}

List.defaultProps = {
  data: undefined,
}
List.propTypes = {
  fromRouter: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any),
  listQueryName: PropTypes.string.isRequired,
}

export default compose(connect())(List)
