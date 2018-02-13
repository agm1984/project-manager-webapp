import { push } from 'react-router-redux'
import client from '../../apolloClient'
import {
  REGISTRATION_NEXT_STEP,
  REGISTRATION_PREV_STEP,
  REGISTRATION_COMPLETE,
} from './reg_types'
import {
  INITIALIZE_APP, AUTH_SUCCESS, SIGN_OUT,
} from '../signin/auth_types'

/**
 * Proceeds to the next registration step.
 * @param {string} step Name of the next step
 */
export const handleNextStep = step => ({
  type: REGISTRATION_NEXT_STEP,
  payload: step,
})

/**
 * Goes back to the previous registration step.
 * @param {string} gotoStep Name of the previous step
 */
export const handlePrevStep = gotoStep => ({
  type: REGISTRATION_PREV_STEP,
  payload: gotoStep,
})

/**
 * Saves the user's JWT Token after signup is complete.
 * @param {string} token JWT Token
 */
export const handleCompletion = token => (dispatch) => {
  localStorage.setItem('token@adam', JSON.stringify(token))
  return dispatch({
    type: REGISTRATION_COMPLETE,
    payload: 'DONE',
  })
}

/**
 * After the new user is done signing up, he/she should not have to sign in
 * and should be redirected to the Admin Dashboard View.
 */
export const handleFirstTimeSignIn = () => async (dispatch) => {
  try {
    dispatch({ type: INITIALIZE_APP })
    const user = await JSON.parse(localStorage.getItem('token@adam'))
    if (!user) {
      return dispatch({ type: SIGN_OUT })
    }
    client.resetStore()
    dispatch({ type: AUTH_SUCCESS })
    return dispatch(push('/admin/dashboard'))
  } catch (e) {
    return dispatch({ type: SIGN_OUT })
  }
}
