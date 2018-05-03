import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goBack, push } from 'react-router-redux'
import { withApollo } from 'react-apollo'
import ServerErrors from '../../common/components/ServerErrors'
import { FormView, FormSubNav } from '../common/'
import viewForms from './forms'
import getTypeReference from '../../utils/getTypeReferences'

class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serverErrors: [],
    }
  }

  /**
   * When the Component mounts, the record should be retrieved from the server.
   */
  componentDidMount() {
    return window.scrollTo(0, 0)
  }

  renderViewForm = () => {
    const { fromRouter, data, viewQueryName } = this.props
    const { type } = fromRouter
    const withTheseProps = {
      initialValues: data[viewQueryName],
    }
    return React.createElement(viewForms[type], { ...withTheseProps }, null)
  }

  render() {
    if (this.props.data.loading) {
      return null
    }
    const { fromRouter, data, viewQueryName } = this.props
    const { type, action, id } = fromRouter
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
          recordLabel={recordLabel}
          recordStatus={recordStatus}
          onClickEdit={() => this.props.dispatch(push(`/admin/${type}/edit/${id}`))}
        />
        <ServerErrors errors={this.state.serverErrors} />
        {this.renderViewForm()}
        <div id="form_back">
          <button
            id="form_back-link"
            onClick={() => this.props.dispatch(goBack())}
          >
            Back
          </button>
        </div>
      </FormView>
    )
  }
}

View.defaultProps = {
  data: undefined,
}
View.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fromRouter: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any),
  viewQueryName: PropTypes.string.isRequired,
}

export default connect()(withApollo(View))
