import {
  ARTICLE_GET_EDITOR, ARTICLE_GET_EDITOR_FAIL, ARTICLE_EDITED,
} from './article_edit_types'

const INITIAL_STATE = {
  person_serialNumber: '',
}

/**
 * The Article Edit Reducer is responsible for Article Edit events.
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ARTICLE_GET_EDITOR:
      return {
        ...state,
        person_serialNumber: action.payload,
      }
    case ARTICLE_GET_EDITOR_FAIL:
      return {
        ...state,
        person_serialNumber: '',
      }
    case ARTICLE_EDITED:
      return {
        ...state,
      }
    default:
      return state
  }
}
