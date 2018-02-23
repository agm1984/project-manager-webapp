import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, graphql, withApollo } from 'react-apollo'
import {
  ListView, ListSubNav, ListSearchFilter, ListErrors,
} from '../common'
import PersonTable from './PersonTable'
import { customFind } from '../utils'
import GET_ALL_PEOPLE_QUERY from './person_list_queries'

class PersonListContainer extends Component {
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
  async componentDidMount() {
    return window.scrollTo(0, 0)
  }
  getListToRender() {
    const { getAllPeople } = this.props.data
    const { searchMatches, search } = this.state
    if (!searchMatches.length && !search) {
      return getAllPeople
    }
    return searchMatches
  }
  getTotalPages() {
    const { getAllPeople } = this.props.data
    const { searchMatches } = this.state
    if (!searchMatches.length) {
      return Math.ceil(getAllPeople.length / 10)
    }
    return Math.ceil(searchMatches.length / 10)
  }
  handleFilterChange({ target: { value } }) {
    const { getAllPeople } = this.props.data
    const { searchOptions } = this.state
    return this.setState({
      search: value,
      searchMatches: customFind(getAllPeople, value, searchOptions),
    })
  }
  handlePageChange(pager) {
    return this.setState({
      activePage: pager.currentPage - 1,
      pagination: pager,
    })
  }
  toggleInactive() {
    const { getAllPeople } = this.props.data
    const { showInactive, searchOptions } = this.state
    return this.setState({
      showInactive: !showInactive,
      searchMatches: (!showInactive)
        ? customFind(getAllPeople, 'Inactive', searchOptions)
        : [],
    })
  }
  render() {
    if (this.props.data.loading) {
      return <ListView />
    }
    const { getAllPeople } = this.props.data
    const {
      activePage, pagination, showInactive, search, searchMatches,
    } = this.state
    return (
      <ListView>
        <ListSubNav
          createURL="/admin/people/create"
          type="Person"
          onClickToggle={() => this.toggleInactive()}
          isFilteringInactive={showInactive}
        />
        <ListSearchFilter
          value={search}
          onChangeFilter={e => this.handleFilterChange(e)}
          placeholder="Search People..."
        />
        <ListErrors errors={this.state.serverErrors} />
        <PersonTable
          pageSize={(search.length > 0 && searchMatches.length === 0) ? 7 : 25}
          searchMatches={(!searchMatches.length) ? getAllPeople : searchMatches}
          onChangePage={pagerState => this.handlePageChange(pagerState)}
          activePage={activePage}
          isEmpty={(search.length > 0 && searchMatches.length === 0)}
          data={this.getListToRender()}
          bottomData={pagination}
          noDataText="No Users to Show"
        />
      </ListView>
    )
  }
}

PersonListContainer.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default compose(
  connect(),
  graphql(GET_ALL_PEOPLE_QUERY),
)(withApollo(PersonListContainer))
