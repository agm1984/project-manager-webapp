import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, graphql, withApollo } from 'react-apollo'
import {
  ListView, ListSubNav, ListSearchFilter, ListErrors,
} from '../common'
import ArticleTable from './ArticleTable'
import { customFind } from '../utils'
import GET_ALL_ARTICLES_QUERY from './article_list_queries'

// show/hide
// https://github.com/react-tools/react-show

class ArticleListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInactive: false,
      activePage: 0,
      pagination: {},
      search: '',
      searchOptions: {
        caseSensitive: false,
        excludedKeys: ['article_avatar'],
      },
      searchMatches: [],
      serverErrors: [],
    }
  }
  componentDidMount() {
    return window.scrollTo(0, 0)
  }
  getListToRender() {
    const { getAllArticles } = this.props.data
    const { searchMatches, search } = this.state
    if (!searchMatches.length && !search) {
      return getAllArticles
    }
    return searchMatches
  }
  getTotalPages() {
    const { getAllArticles } = this.props.data
    const { searchMatches } = this.state
    if (!searchMatches.length) {
      return Math.ceil(getAllArticles.length / 10)
    }
    return Math.ceil(searchMatches.length / 10)
  }
  handleFilterChange({ target: { value } }) {
    const { getAllArticles } = this.props.data
    const { searchOptions } = this.state
    return this.setState({
      search: value,
      searchMatches: customFind(getAllArticles, value, searchOptions),
    })
  }
  handlePageChange(pager) {
    return this.setState({
      activePage: pager.currentPage - 1,
      pagination: pager,
    })
  }
  toggleInactive() {
    const { getAllArticles } = this.props.data
    const { showInactive, searchOptions } = this.state
    return this.setState({
      showInactive: !showInactive,
      searchMatches: (!showInactive)
        ? customFind(getAllArticles, 'Inactive', searchOptions)
        : [],
    })
  }
  render() {
    if (this.props.data.loading) {
      return <ListView />
    }
    const { getAllArticles } = this.props.data
    const {
      activePage, pagination, showInactive, search, searchMatches,
    } = this.state
    return (
      <ListView>
        <ListSubNav
          createURL="/admin/articles/create"
          type="Article"
          onClickToggle={() => this.toggleInactive()}
          isFilteringInactive={showInactive}
        />
        <ListSearchFilter
          value={search}
          onChangeFilter={e => this.handleFilterChange(e)}
          placeholder="Search Articles..."
        />
        <ListErrors errors={this.state.serverErrors} />
        <ArticleTable
          pageSize={(search.length > 0 && searchMatches.length === 0) ? 7 : 25}
          searchMatches={(!searchMatches.length) ? getAllArticles : searchMatches}
          onChangePage={pagerState => this.handlePageChange(pagerState)}
          activePage={activePage}
          isEmpty={(search.length > 0 && searchMatches.length === 0)}
          data={this.getListToRender()}
          bottomData={pagination}
          noDataText="No Articles to Show"
        />
      </ListView>
    )
  }
}

ArticleListContainer.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default compose(
  connect(),
  graphql(GET_ALL_ARTICLES_QUERY),
)(withApollo(ArticleListContainer))
