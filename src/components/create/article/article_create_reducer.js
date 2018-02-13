import {
  ARTICLE_GET_AUTHOR, ARTICLE_GET_AUTHOR_FAIL, ARTICLE_CREATED,
} from './article_create_types'

const INITIAL_STATE = {
  person_serialNumber: '',
}

/**
 * The Article Create Reducer is responsible for Article Creation events.
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ARTICLE_GET_AUTHOR:
      return {
        ...state,
        person_serialNumber: action.payload,
      }
    case ARTICLE_GET_AUTHOR_FAIL:
      return {
        ...state,
        person_serialNumber: '',
      }
    case ARTICLE_CREATED:
      return {
        ...state,
      }
    default:
      return state
  }
}
