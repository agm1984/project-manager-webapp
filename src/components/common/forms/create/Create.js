import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack, push } from 'react-router-redux'
import { compose, withApollo } from 'react-apollo'
import ServerErrors from '../../common/components/ServerErrors'
import { FormView, FormSubNav } from '../common/'
import createForms from './forms'
import getTypeReference from '../../utils/getTypeReferences'

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serverErrors: [],
    }
  }

  componentDidMount() {
    return window.scrollTo(0, 0)
  }

  /**
   * When the form is submitted, the values should be sent to the server.
   * @param {Object} props Values from the Create Form
   */
  handleCreateSubmit = async (props) => {
    const { fromRouter, createMutation, listQuery } = this.props
    const { type } = fromRouter
    const typePrefix = getTypeReference({
      type,
      hasWhichNumber: 'singular',
      hasWhichCase: 'lowercase',
    })
    try {
      await this.props.client.mutate({
        mutation: createMutation,
        variables: { ...props },
        refetchQueries: [{ query: listQuery }],
      })
      return this.props.dispatch(push(`/admin/${type}`))
    } catch (e) {
      console.log('ERROR', e)
      return this.setState({
        serverErrors: [`Problem creating ${typePrefix} record.`],
      })
    }
  }

  renderCreateForm = () => {
    const { type } = this.props.fromRouter
    const withTheseProps = {
      onCreateSubmit: props => this.handleCreateSubmit(props),
      handleBackPress: () => this.props.dispatch(goBack()),
    }
    return React.createElement(createForms[type], { ...withTheseProps }, null)
  }

  render() {
    const { type, action } = this.props.fromRouter
    return (
      <FormView>
        <FormSubNav
          action={action}
          type={getTypeReference({
            type,
            hasWhichNumber: 'singular',
            hasWhichCase: 'uppercase',
          })}
          hasRequiredFields
        />
        <ServerErrors
          errors={this.state.serverErrors}
          style={{ marginTop: '3.2rem' }}
        />
        {this.renderCreateForm()}
      </FormView>
    )
  }
}

Create.propTypes = {
  client: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  fromRouter: PropTypes.objectOf(PropTypes.any).isRequired,
  createMutation: PropTypes.objectOf(PropTypes.any).isRequired,
  listQuery: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default compose(connect())(withApollo(Create))
