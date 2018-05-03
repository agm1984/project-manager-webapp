import {
  INITIALIZE_APP, AUTH_SUCCESS, AUTH_FAIL, SIGN_OUT,
  HYDRATE_PROFILE_SUCCESS, HYDRATE_PROFILE_FAIL,
} from './auth_types'

const INITIAL_STATE = {
  isAuthenticated: null,
  isSigningIn: null,
  person: {},
}

/**
 * The Auth Reducer is responsible for user authentication state changes.
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return {
        state,
        isSigningIn: true,
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isSigningIn: false,
      }
    case AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isSigningIn: false,
      }
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        isSigningIn: false,
      }
    case HYDRATE_PROFILE_SUCCESS:
      return {
        ...state,
        person: {
          ...action.payload,
        },
      }
    case HYDRATE_PROFILE_FAIL:
      return {
        ...state,
        person: {},
      }
    default:
      return state
  }
}
