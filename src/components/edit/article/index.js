import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, graphql, withApollo } from 'react-apollo'
import { UpdateView, UpdateSubNav, UpdateErrors } from '../common'
import ArticleEditForm from './ArticleEditForm'
import {
  handleGetEditor, handleEditRedirect, handleGoBack,
} from './article_edit_actions'
import compareObjectStates from '../utils'
import { GET_ARTICLE_QUERY } from './article_edit_queries'
import EDIT_ARTICLE_MUTATION from './article_edit_mutations'
import GET_ALL_ARTICLES_QUERY from '../../list/article/article_list_queries'

class ArticleEditContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: {},
      serverErrors: [],
    }
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.articlePlainText = ''
  }

  /**
   * When the Edit View loads, the Article's and Editor's data should be retrieved.
   */
  async componentDidMount() {
    window.scrollTo(0, 0)
    const { article_slug } = this.props.match.params
    this.getArticle(article_slug)
    return this.props.handleGetEditor()
  }

  /**
   * This method gets the Article data and puts it into the Component's state.
   * @param {String} article_slug Look-up Slug for the Article
   */
  async getArticle(article_slug) {
    try {
      const res = await this.props.client.query({
        query: GET_ARTICLE_QUERY,
        variables: { article_slug },
      })
      const { getArticle } = res.data
      return this.setState({ record: getArticle })
    } catch (e) {
      return this.setState({
        serverErrors: ['Problem getting article record.'],
      })
    }
  }

  /**
   * When the form is submitted, the current values should be compared with their
   * prior values, and only values that were changed should be sent to the server.
   * @param {Object} updatedProps Updated values from the Edit Form
   */
  async handleEditSubmit(updatedProps) {
    try {
      const { record } = this.state
      const updates = compareObjectStates(record, updatedProps)
      const { person_serialNumber } = this.props
      /**
       * Tags must be converted from an Array to comma-separated values String.
       * @param {Array} tags Array of Tags to be converted
       */
      const convertTagsToString = tags => tags.reduce((acc, tag, i) => {
        if (i === 0) return tag
        const string = `${acc},${tag}`
        return string
      }, '')
      await this.props.mutate({
        variables: {
          ...updates,
          article_editorSerialNumber: person_serialNumber,
          article_oldSlug: record.article_slug,
          article_tags: (!updates.article_tags)
            ? undefined
            : convertTagsToString(updates.article_tags),
          article_plainText: (!updates.article_content)
            ? undefined
            : this.articlePlainText,
        },
        refetchQueries: [{ query: GET_ALL_ARTICLES_QUERY }],
      })
      return this.props.handleEditRedirect()
    } catch (e) {
      return this.setState({
        serverErrors: ['Something went wrong while saving changes.'],
      })
    }
  }

  render() {
    if (!Object.keys(this.state.record).length) {
      return <UpdateView />
    }
    const { record, serverErrors } = this.state
    const { article_title, article_status } = this.state.record
    return (
      <UpdateView>
        <UpdateSubNav
          type="Article"
          hasRequiredFields
          recordLabel={article_title.toUpperCase()}
          recordStatus={article_status.toUpperCase()}
        />
        <UpdateErrors errors={serverErrors} />
        <ArticleEditForm
          onEditSubmit={updatedProps => this.handleEditSubmit(updatedProps)}
          initialValues={record}
          handleBackPress={(e) => {
            e.preventDefault()
            this.props.handleGoBack()
          }}
          onGetPlainText={(text) => {
            this.articlePlainText = text
          }}
        />
      </UpdateView>
    )
  }
}

ArticleEditContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ article_slug: PropTypes.string }),
  }).isRequired,
  client: PropTypes.objectOf(PropTypes.any).isRequired,
  mutate: PropTypes.func.isRequired,
  handleGetEditor: PropTypes.func.isRequired,
  person_serialNumber: PropTypes.string.isRequired,
  handleEditRedirect: PropTypes.func.isRequired,
  handleGoBack: PropTypes.func.isRequired,
}

/**
 * The currently signed in Person's Serial Number is used to set the Editor
 * of the Article.
 * @param {Object} state Redux State Tree
 */
const mapStateToProps = (state) => {
  const { person_serialNumber } = state.editArticle
  return {
    person_serialNumber,
  }
}

export default compose(
  connect(mapStateToProps, {
    handleGetEditor, handleEditRedirect, handleGoBack,
  }),
  graphql(EDIT_ARTICLE_MUTATION),
)(withApollo(ArticleEditContainer))
