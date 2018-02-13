import {
  NAV_GET_AVATAR,
  NAV_GET_AVATAR_FAIL,
} from './nav_types'
import noPhoto from './images/noPhoto.png'

const INITIAL_STATE = {
  person_avatar: noPhoto,
}

/**
 * The Nav Reducer is responsible for getting and setting the currently
 * signed in user's profile picture in the Top Nav Bar.
 * A fallback photo is used by default and in the event of an error.
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAV_GET_AVATAR:
      return {
        ...state,
        person_avatar: action.payload,
      }
    case NAV_GET_AVATAR_FAIL:
      return {
        ...state,
        person_avatar: noPhoto,
      }
    default:
      return state
  }
}
