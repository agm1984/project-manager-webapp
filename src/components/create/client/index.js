import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack, push } from 'react-router-redux'
import { compose, graphql, withApollo } from 'react-apollo'
import { CreateView, CreateSubNav, CreateErrors } from '../common'
import PersonCreateForm from './PersonCreateForm'
import ADD_PERSON_MUTATION from './person_create_mutations'
import GET_ALL_PEOPLE_QUERY from '../../list/person/person_list_queries'

class PersonCreateContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serverErrors: [],
    }
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  /**
   * When the form is submitted, the values should be sent to the server.
   * @param {Object} props Values from the Create Form
   */
  async handleCreateSubmit(props) {
    try {
      await this.props.mutate({
        variables: { ...props },
        refetchQueries: [{ query: GET_ALL_PEOPLE_QUERY }],
      })
      return this.props.dispatch(push('/admin/people'))
    } catch (error) {
      return this.setState({
        serverErrors: ['Something went wrong creating person record.']
      })
    }
  }

  render() {
    return (
      <CreateView>
        <CreateSubNav type="Person" hasRequiredFields />
        <CreateErrors errors={this.state.serverErrors} />
        <PersonCreateForm
          onCreateSubmit={props => this.handleCreateSubmit(props)}
          handleBackPress={() => this.props.dispatch(goBack())}
        />
      </CreateView>
    )
  }
}

PersonCreateContainer.propTypes = {
  mutate: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default compose(
  connect(),
  graphql(ADD_PERSON_MUTATION),
)(withApollo(PersonCreateContainer))
