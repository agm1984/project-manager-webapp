/**
 * This utility function compares two objects and returns only
 * the values that have been changed.
 * @param {*} before The Object's "before" state
 * @param {*} after  The Object's "after" state
 */
const compareObjectStates = (before, after) => {
  return Object.keys(before).reduce((acc, prop) => {
    if (before[prop] !== after[prop]) acc[prop] = after[prop]
    return acc
  }, {})
}

export default compareObjectStates
