import {
  REGISTRATION_NEXT_STEP,
  REGISTRATION_PREV_STEP,
  REGISTRATION_COMPLETE,
} from './reg_types'

const INITIAL_STATE = {
  currentStep: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRATION_NEXT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      }
    case REGISTRATION_PREV_STEP:
      return {
        ...state,
        currentStep: action.payload,
      }
    case REGISTRATION_COMPLETE:
      return {
        ...state,
        currentStep: action.payload,
      }
    default:
      return state
  }
}
