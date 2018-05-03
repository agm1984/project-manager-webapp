import { push } from 'react-router-redux'
import client from '../../apolloClient'
import {
  INITIALIZE_APP, AUTH_SUCCESS, AUTH_FAIL, SIGN_OUT,
  HYDRATE_PROFILE_SUCCESS, HYDRATE_PROFILE_FAIL,
} from './auth_types'
import GET_ME_QUERY from './auth_queries'

export const hydrateProfile = () => async (dispatch) => {
  try {
    const res = await client.query({
      query: GET_ME_QUERY,
    })
    const { me } = res.data
    return dispatch({
      type: HYDRATE_PROFILE_SUCCESS,
      payload: me,
    })
  } catch (e) {
    return dispatch({ type: HYDRATE_PROFILE_FAIL })
  }
}

/**
 * When the app is initialized, localStorage is checked for a JWT. If found,
 * the user is signed in. If not, the user is signed out.
 */
export const initApp = () => async (dispatch) => {
  console.log('RUNNING THIS')
  try {
    dispatch({ type: INITIALIZE_APP })
    const user = await JSON.parse(localStorage.getItem('token@omni'))
    if (!user) {
      return dispatch({ type: SIGN_OUT })
    }
    dispatch(hydrateProfile())
    return dispatch({ type: AUTH_SUCCESS })
  } catch (e) {
    return dispatch({ type: SIGN_OUT })
  }
}

/**
 * When signing out, manually or automatically, this method should be called.
 * FUTURE: The JWT Token should be deleted upon sign out.
 */
export const handleSignOut = () => (dispatch) => {
  dispatch({ type: SIGN_OUT })
  return dispatch(push('/signin'))
}

/**
 * When the user signs in, this method should be called. The Apollo Store is reset
 * to prevent the user from seeing stale data or data from another user.
 * @param {String} token JWT Token from the server
 */
export const handleSignInSuccess = token => async (dispatch) => {
  try {
    localStorage.setItem('token@omni', JSON.stringify(token))
    client.resetStore()
    dispatch({ type: AUTH_SUCCESS })
    return dispatch(push('/admin/board'))
  } catch (e) {
    return dispatch({ type: AUTH_FAIL })
  }
}
