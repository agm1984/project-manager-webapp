import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, graphql, withApollo } from 'react-apollo'
import List from './list/List'
// import People from './'
// import {
//   ListView, ListSubNav, ListSearchFilter, ListErrors,
// } from '../common'
// import PersonTable from './PersonTable'
// import { customFind } from '../utils'
// import GET_ALL_PEOPLE_QUERY from './person_list_queries'

const getGraphQL = (params) => {
  const { type, action, id } = params
  const config = {
    list: {
      people: 'QUERY LIST_PEOPLE',
      clients: 'QUERY LIST_CLIENTS',
      leads: 'QUERY LIST_LEADS',
      articles: 'QUERY LIST_ARTICLES',
    },
    create: {
      people: 'MUTATION CREATE_PERSON',
      clients: 'MUTATION CREATE_CLIENT',
      leads: 'MUTATION CREATE_LEAD',
      articles: 'MUTATION CREATE_ARTICLE',
    },
    edit: {
      people: `MUTATION EDIT_PERSON ${id}`,
      clients: `MUTATION EDIT_CLIENT ${id}`,
      leads: `MUTATION EDIT_LEAD ${id}`,
      articles: `MUTATION EDIT_ARTICLE ${id}`,
    },
    view: {
      people: `QUERY VIEW_PERSON ${id}`,
      clients: `QUERY VIEW_CLIENT ${id}`,
      leads: `QUERY VIEW_LEAD ${id}`,
      articles: `QUERY VIEW_ARTICLE ${id}`,
    },
  }
  return config[action][type]
}

// ID: Get from DB

class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      action: '',
      id: '',
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

  prepareView = () => {
    const { type, action, id } = this.props.match.params
    this.setState({ type, action, id })
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
  renderComponentForAction = (params) => {
    const { type, action, id } = params
    const component = {
      list: <List urlParams={params} />,
      // create: <Create urlParams={params} />,
      // edit: <Edit urlParams={params} />,
      // view: <View urlParams={params} />,
    }
    return component[action]
  }
  render() {
    return this.renderComponentForAction(this.props.match.params)
    // if (this.props.data.loading) {
    //   return <ListView />
    // }
    // const { getAllPeople } = this.props.data
    // const {
    //   activePage, pagination, showInactive, search, searchMatches,
    // } = this.state
    console.log('PROPS', this.props.match.params)
    console.log('STATE', this.state)
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
        <div>TYPE: {this.props.match.params.type}</div>
        <div>ACTION: {this.props.match.params.action}</div>
        <div>ID: {this.props.match.params.id}</div>
        <div>SERVER ERRORS: {this.state.serverErrors}</div>
        <div>GRAPHQL: {getGraphQL(this.props.match.params)}</div>
      </div>
      // <ListView>
      //   <ListSubNav
      //     createURL="/admin/people/create"
      //     type="Person"
      //     onClickToggle={() => this.toggleInactive()}
      //     isFilteringInactive={showInactive}
      //   />
      //   <ListSearchFilter
      //     value={search}
      //     onChangeFilter={e => this.handleFilterChange(e)}
      //     placeholder="Search People..."
      //   />
      //   <ListErrors errors={this.state.serverErrors} />
      //   <PersonTable
      //     pageSize={(search.length > 0 && searchMatches.length === 0) ? 7 : 25}
      //     searchMatches={(!searchMatches.length) ? getAllPeople : searchMatches}
      //     onChangePage={pagerState => this.handlePageChange(pagerState)}
      //     activePage={activePage}
      //     isEmpty={(search.length > 0 && searchMatches.length === 0)}
      //     data={this.getListToRender()}
      //     bottomData={pagination}
      //     noDataText="No Users to Show"
      //   />
      // </ListView>
    )
  }
}

// Router.propTypes = {
//   data: PropTypes.objectOf(PropTypes.any).isRequired,
// }

export default compose(
  connect(),
  // graphql(GET_ALL_PEOPLE_QUERY),
)(withApollo(Router))
