import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack, push } from 'react-router-redux'
import { compose, withApollo } from 'react-apollo'
import ServerErrors from '../../common/components/ServerErrors'
import { FormView, FormSubNav } from '../common/'
import editForms from './forms'
import getTypeReference from '../../utils/getTypeReferences'

class Edit extends Component {
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
   * When the form is submitted, changed values should be sent to the server.
   * @param {Object} updatedProps Values that were mutated by the User
   */
  handleEditSubmit = async (updatedProps) => {
    const { fromRouter, editMutation, listQuery } = this.props
    const { type } = fromRouter
    const typePrefix = getTypeReference({
      type,
      hasWhichNumber: 'singular',
      hasWhichCase: 'lowercase',
    })
    try {
      await this.props.client.mutate({
        mutation: editMutation,
        variables: { ...updatedProps },
        refetchQueries: [{ query: listQuery }],
      })
      return this.props.dispatch(push(`/admin/${type}`))
    } catch (e) {
      console.log('ERROR', e)
      return this.setState({
        serverErrors: [`Problem updating ${typePrefix} record.`],
      })
    }
  }

  renderEditForm = () => {
    const { fromRouter, data, viewQueryName } = this.props
    const { type } = fromRouter
    const withTheseProps = {
      type,
      initialValues: data[viewQueryName],
      onEditSubmit: props => this.handleEditSubmit(props),
      handleBackPress: () => this.props.dispatch(goBack()),
    }
    return React.createElement(editForms[type], { ...withTheseProps }, null)
  }

  render() {
    if (this.props.data.loading) {
      return null
    }
    const { fromRouter, data, viewQueryName } = this.props
    const { type, action } = fromRouter
    const record = data[viewQueryName]
    const typePrefix = getTypeReference({
      type,
      hasWhichNumber: 'singular',
      hasWhichCase: 'lowercase',
    })
    let recordLabel
    if (type.toLowerCase() === 'articles') { /* eslint-disable prefer-template */
      recordLabel = record[typePrefix + '_title'].toUpperCase()
    } else {
      recordLabel = `${record[typePrefix + '_givenName'].toUpperCase()} ${record[typePrefix + '_familyName'].toUpperCase()}`
    }
    const recordStatus = record[typePrefix + '_status'].toUpperCase() /* eslint-enable prefer-template */
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
          recordLabel={recordLabel}
          recordStatus={recordStatus}
        />
        <ServerErrors
          errors={this.state.serverErrors}
          style={{ marginTop: '3.2rem' }}
        />
        {this.renderEditForm()}
      </FormView>
    )
  }
}

Edit.defaultProps = {
  data: undefined,
}
Edit.propTypes = {
  client: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  fromRouter: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any),
  viewQueryName: PropTypes.string.isRequired,
  editMutation: PropTypes.objectOf(PropTypes.any).isRequired,
  listQuery: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default compose(connect())(withApollo(Edit))
