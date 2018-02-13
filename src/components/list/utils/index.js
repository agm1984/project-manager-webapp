/**
 * This utility function filters matches from an array of objects.
 * TODO: Consider refactor to use http://fusejs.io/
 * @param {Array} collection The array to filter from
 * @param {String} term The search terms
 * @param {Object} opts The config options Object
 */
const customFind = (collection, term, opts) => {
  const filterBy = () => {
    const searchTerms = (opts.caseSensitive) ? new RegExp(term) : new RegExp(term, 'i')
    return (obj) => {
      for (const key of Object.keys(obj)) { // eslint-disable-line
        if (searchTerms.test(obj[key]) && !opts.excludedKeys.includes(key)) {
          return true
        }
      }
      return false
    }
  }
  return collection.filter(filterBy(term))
}

/**
 * This utility function removes extraneous (non-numerical) characters from
 * a 10-digit telephone number and returns the result.
 * @param {*} tel Phone number
 */
const formatTel = (tel) => {
  if (!tel || tel.length !== 10) {
    return null
  }
  // returns 5551234567,555,123,4567
  const m = tel.match(/^(\d{3})(\d{3})(\d{4})$/)
  // returns (555) 123-4567
  return `(${m[1]}) ${m[2]}-${m[3]}`
}

/**
 * This utility function formats a unix timestamp into human-readable.
 * @param {*} ts Unix timestamp in milliseconds
 */
const formatTime = (ts) => {
  const rawDate = new Date(+ts).toISOString().split('T')
  const date = `${rawDate[0]}`
  const rawTime = rawDate[1].split(':')
  const time = `${(rawTime[0])}:${rawTime[1]}`
  return `${date} at ${time}`
}

export { customFind, formatTel, formatTime }
