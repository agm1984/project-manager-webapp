import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, graphql, withApollo } from 'react-apollo'
import listQueries from './list/queries'
import createMutations from './forms/create/mutations'
import editMutations from './forms/edit/mutations'
import viewQueries from './forms/view/queries'
// import validators from './validators'
import List from './list/List'
import Create from './forms/create/Create'
import Edit from './forms/edit/Edit'
import View from './forms/view/View'
import getTypeReference from './utils/getTypeReferences'

class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serverErrors: [],
    }
  }

  getGraphQL = (params) => {
    const { type, id } = params
    const typePrefix = getTypeReference({
      type,
      hasWhichNumber: 'singular',
      hasWhichCase: 'lowercase',
    })
    return {
      [`${typePrefix}_serialNumber`]: id,
      listQuery: listQueries[type],
      listQueryName: listQueries[type].definitions[0].name.value,
      createMutation: createMutations[type],
      createMutationName: createMutations[type].definitions[0].name.value,
      editMutation: editMutations[type],
      editMutationName: editMutations[type].definitions[0].name.value,
      viewQuery: viewQueries[type],
      viewQueryName: viewQueries[type].definitions[0].name.value,
    }
  }

  renderComponentForAction = (params) => {
    const { action } = params
    const GQL = this.getGraphQL(params)
    const {
      listQuery, createMutation, editMutation, viewQuery,
    } = GQL
    if (!action) {
      return <ListWithGraphQL fromRouter={params} {...GQL} />
    }

    // INJECT QUERIES BASED ON URL
    const ListWithGraphQL = graphql(listQuery)(List)
    const CreateWithGraphQL = graphql(createMutation)(Create)
    const EditWithGraphQL = compose(
      graphql(viewQuery),
      graphql(editMutation),
    )(Edit)
    const ViewWithGraphQL = graphql(viewQuery)(View)
    const componentFor = {
      list: <ListWithGraphQL fromRouter={params} {...GQL} />,
      create: <CreateWithGraphQL fromRouter={params} {...GQL} />,
      edit: <EditWithGraphQL fromRouter={params} {...GQL} />,
      view: <ViewWithGraphQL fromRouter={params} {...GQL} />,
    }
    if (!componentFor[action]) {
      return <ListWithGraphQL fromRouter={params} {...GQL} />
    }
    return componentFor[action]
  }
  render() {
    return this.renderComponentForAction(this.props.match.params)
  }
}

Router.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ type: PropTypes.string }),
  }).isRequired,
}

export default compose(connect())(withApollo(Router))
