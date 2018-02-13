/**
 * This utility function formats a unix timestamp into human-readable.
 * @param {*} ts Unix timestamp in milliseconds
 */
const formatTime = (ts) => {
  const rawDate = new Date(ts).toISOString().split('T')
  const date = `${rawDate[0]}`
  const rawTime = rawDate[1].split(':')
  const time = `${(rawTime[0])}:${rawTime[1]}`
  return `${date} at ${time}`
}

export default formatTime
