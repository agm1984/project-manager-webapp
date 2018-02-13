import { goBack, push } from 'react-router-redux'
import {
  ARTICLE_GET_EDITOR, ARTICLE_GET_EDITOR_FAIL, ARTICLE_EDITED,
} from './article_edit_types'
import client from '../../apolloClient'
import { GET_ME_QUERY } from './article_edit_queries'

/**
 * The handleGetAuthor Action Creator is responsible for getting the currently
 * signed in user's details for editing an Article.
 */
export const handleGetEditor = () => async (dispatch) => {
  try {
    const res = await client.query({
      query: GET_ME_QUERY,
    })
    const { me } = res.data
    return dispatch({
      type: ARTICLE_GET_EDITOR,
      payload: me.person_serialNumber,
    })
  } catch (e) {
    return dispatch({
      type: ARTICLE_GET_EDITOR_FAIL,
    })
  }
}

export const handleEditRedirect = () => async (dispatch) => {
  dispatch({ type: ARTICLE_EDITED })
  return dispatch(push('/admin/articles'))
}

export const handleGoBack = () => async dispatch => dispatch(goBack())
