import { NAV_GET_AVATAR, NAV_GET_AVATAR_FAIL } from './nav_types'
import client from '../apolloClient'
import GET_ME_QUERY from './nav_queries'
import noPhoto from './images/noPhoto.png'

/**
 * This Action Creator gets the currently signed in user's profile picture
 * from the server. No credentials are needed because the user is identified by
 * his/her JWT Token which contains the user's Serial Number.
 * If the request fails, a fallback photo will be displayed.
 */
const handleGetPersonAvatar = () => async (dispatch) => {
  try {
    const res = await client.query({
      query: GET_ME_QUERY,
    })
    const { me } = res.data
    if (!me.person_avatar) {
      return dispatch({
        type: NAV_GET_AVATAR_FAIL,
        payload: noPhoto,
      })
    }
    return dispatch({
      type: NAV_GET_AVATAR,
      payload: me.person_avatar,
    })
  } catch (firstError) {
    try {
      const res = await client.query({
        query: GET_ME_QUERY,
      })
      const { me } = res.data
      if (!me.person_avatar) {
        return dispatch({
          type: NAV_GET_AVATAR_FAIL,
          payload: noPhoto,
        })
      }
      return dispatch({
        type: NAV_GET_AVATAR,
        payload: me.person_avatar,
      })
    } catch (secondError) {
      return dispatch({
        type: NAV_GET_AVATAR_FAIL,
        payload: noPhoto,
      })
    }
  }
}

export default handleGetPersonAvatar
