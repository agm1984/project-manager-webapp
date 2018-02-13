import getConfig from '../../env/config'

const config = getConfig(process.env.NODE_ENV)

/**
 * This middleware logs every action when turned on.
 * @param {Object} store Redux State Tree
 */
const logger = store => (next) => {
  if (config.VERBOSE_REDUX_LOGGING) {
    if (!console.group) return next
    return (action) => {
      console.group(action.type)
      console.log('%c prev state', 'color: gray', store.getState())
      console.log('%c action', 'color: blue', action)
      const returnValue = next(action)
      console.log('%c next state', 'color: green', store.getState())
      console.groupEnd(action.type)
      return returnValue
    }
  }
  return next
}

export default logger
