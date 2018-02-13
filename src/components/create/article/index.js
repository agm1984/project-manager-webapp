import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, graphql, withApollo } from 'react-apollo'
import { CreateView, CreateSubNav, CreateErrors } from '../common'
import ArticleCreateForm from './ArticleCreateForm'
import {
  handleGetAuthor, handleCreateRedirect, handleGoBack,
} from './article_create_actions'
import ADD_ARTICLE_MUTATION from './article_create_mutations'
import GET_ALL_ARTICLES_QUERY from '../../list/article/article_list_queries'

class ArticleCreateContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serverErrors: [],
    }
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.articlePlainText = ''
  }

  /**
   * When the Create View loads, the Creator's Serial Number should be retrieved.
   * In the future, this should be expanded to retrieve a list of Authors.
   */
  componentDidMount() {
    window.scrollTo(0, 0)
    return this.props.handleGetAuthor()
  }

  /**
   * When the form is submitted, the values should be sent to the server.
   * Tags must be converted from an Array to comma-separated values String.
   * @param {Object} props Values from the Create Form
   */
  async handleCreateSubmit(props) {
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
    try {
      await this.props.mutate({
        variables: {
          ...props,
          article_plainText: this.articlePlainText,
          article_authorSerialNumber: person_serialNumber,
          article_tags: convertTagsToString(props.article_tags),
        },
        refetchQueries: [{ query: GET_ALL_ARTICLES_QUERY }],
      })
      return this.props.handleCreateRedirect()
    } catch (error) {
      return this.setState({
        serverErrors: ['Something went wrong creating article.'],
      })
    }
  }

  render() {
    return (
      <CreateView>
        <CreateSubNav type="Article" />
        <CreateErrors errors={this.state.serverErrors} />
        <ArticleCreateForm
          onCreateSubmit={props => this.handleCreateSubmit(props)}
          handleBackPress={(e) => {
            e.preventDefault()
            this.props.handleGoBack()
          }}
          onGetPlainText={(text) => {
            this.articlePlainText = text
          }}
        />
      </CreateView>
    )
  }
}

ArticleCreateContainer.propTypes = {
  mutate: PropTypes.func.isRequired,
  handleGetAuthor: PropTypes.func.isRequired,
  person_serialNumber: PropTypes.string.isRequired,
  handleCreateRedirect: PropTypes.func.isRequired,
  handleGoBack: PropTypes.func.isRequired,
}

/**
 * The currently signed in Person's Serial Number is used to set the Author
 * of the Article.
 * @param {Object} state The entire Redux State Tree
 */
const mapStateToProps = (state) => {
  const { person_serialNumber } = state.createArticle
  return {
    person_serialNumber,
  }
}

export default compose(
  connect(mapStateToProps, {
    handleGetAuthor, handleCreateRedirect, handleGoBack,
  }),
  graphql(ADD_ARTICLE_MUTATION),
)(withApollo(ArticleCreateContainer))
