import { goBack, push } from 'react-router-redux'
import {
  ARTICLE_GET_AUTHOR, ARTICLE_GET_AUTHOR_FAIL, ARTICLE_CREATED,
} from './article_create_types'
import client from '../../apolloClient'
import GET_ME_QUERY from './article_create_queries'

/**
 * The handleGetAuthor Action Creator is responsible for getting the currently
 * signed in user's details for composing an Article.
 */
export const handleGetAuthor = () => async (dispatch) => {
  try {
    const res = await client.query({
      query: GET_ME_QUERY,
    })
    const { me } = res.data
    return dispatch({
      type: ARTICLE_GET_AUTHOR,
      payload: me.person_serialNumber,
    })
  } catch (e) {
    return dispatch({
      type: ARTICLE_GET_AUTHOR_FAIL,
    })
  }
}

export const handleCreateRedirect = () => async (dispatch) => {
  dispatch({ type: ARTICLE_CREATED })
  return dispatch(push('/admin/articles'))
}

export const handleGoBack = () => async (dispatch) => {
  return dispatch(goBack())
}

