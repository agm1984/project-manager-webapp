import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withApollo } from 'react-apollo'
import listQueries from './queries'
import {
  ListView, ListSubNav, ListSearchFilter, ListErrors,
} from '../common'
import PersonTable from './PersonTable'
// import { customFind } from '../utils'
// import GET_ALL_PEOPLE_QUERY from './person_list_queries'

const getGraphQL = (params) => {
  const { type } = params
  console.log('QUERIES', listQueries)
  console.log('QUERY NAME', listQueries[type].definitions[0].name.value)
  return {
    query: listQueries[type],
    queryName: listQueries[type].definitions[0].name.value,
  }
}

// ID: Get from DB

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
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
    this.getList(this.props.urlParams)
    return window.scrollTo(0, 0)
  }

  getList = async ({ type }) => {
    try {
      const { query, queryName } = getGraphQL(this.props.urlParams)
      const res = await this.props.client.query({ query })
      const list = res.data[queryName]
      return this.setState({ list })
    } catch (e) {
      return this.setState({ serverErrors: [`Problem getting list of ${type}.`] })
    }
  }

  // getListToRender() {
  //   const { getAllPeople } = this.props.data
  //   const { searchMatches, search } = this.state
  //   if (!searchMatches.length && !search) {
  //     return getAllPeople
  //   }
  //   return searchMatches
  // }

  // getTotalPages() {
  //   const { getAllPeople } = this.props.data
  //   const { searchMatches } = this.state
  //   if (!searchMatches.length) {
  //     return Math.ceil(getAllPeople.length / 10)
  //   }
  //   return Math.ceil(searchMatches.length / 10)
  // }

  collectState = () => {
    const test = this.props

  }
  // handleFilterChange({ target: { value } }) {
  //   const { getAllPeople } = this.props.data
  //   const { searchOptions } = this.state
  //   return this.setState({
  //     search: value,
  //     searchMatches: customFind(getAllPeople, value, searchOptions),
  //   })
  // }
  // handlePageChange(pager) {
  //   return this.setState({
  //     activePage: pager.currentPage - 1,
  //     pagination: pager,
  //   })
  // }
  // toggleInactive() {
  //   const { getAllPeople } = this.props.data
  //   const { showInactive, searchOptions } = this.state
  //   return this.setState({
  //     showInactive: !showInactive,
  //     searchMatches: (!showInactive)
  //       ? customFind(getAllPeople, 'Inactive', searchOptions)
  //       : [],
  //   })
  // }
  render() {
    // if (this.props.data.loading) {
    //   return <ListView />
    // }
    // const { getAllPeople } = this.props.data
    // const {
    //   activePage, pagination, showInactive, search, searchMatches,
    // } = this.state
    // console.log('PROPS', this.props.match.params)
    // console.log('STATE', this.state)
    // const ViewType = 'list'
    // const ViewAction = ''
    // return (
    //   <ViewType>
    //     <ViewAction>
    //       <ID />
    //     </ViewAction>
    //   </ViewType>
    // )
    // <Component
    //   GraphQL={getGraphQL(this.props.match.params)}
    // />
    // return action[type][id]
    return (
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}
      >
        <div>TYPE: {this.props.urlParams.type}</div>
        <div>ACTION: {this.props.urlParams.action}</div>
        <div>ID: {this.props.urlParams.id}</div>
        <div>SERVER ERRORS: {this.state.serverErrors}</div>
        <div>GRAPHQL: {getGraphQL(this.props.urlParams).queryName}</div>
        <div>DATA: {JSON.stringify(this.state.list)}</div>
      </div>
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

List.propTypes = {
  urlParams: PropTypes.objectOf(PropTypes.any).isRequired,
  // data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default compose(
  connect(),
  // graphql(GET_ALL_PEOPLE_QUERY),
)(withApollo(List))
