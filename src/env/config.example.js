/**
 * The App's run-time environment can be dynamically controlled by passing
 * different environments into the lookup table. This is done to facilitate
 * unit testing and to simplify app instantiation code complexity.
 * @param {String} NODE_ENV Currently set run-time Environment
 */
const getConfig = (NODE_ENV) => {
  const env = {
    development: {
      API_URI: 'http://INSERT_URL:PORT/graphql',
      CORS_OPTIONS: {
        credentials: 'same-origin',
        mode: 'cors',
      },
      VERBOSE_REDUX_LOGGING: false,
    },
    test: {
      API_URI: 'http://localhost:7777/graphql',
      CORS_OPTIONS: {
        credentials: 'same-origin',
        mode: 'cors',
      },
      VERBOSE_REDUX_LOGGING: false,
    },
    production: {
      API_URI: 'http://INSERT_URL:PORT/graphql',
      CORS_OPTIONS: {
        credentials: 'same-origin',
        mode: 'cors',
      },
      VERBOSE_REDUX_LOGGING: false,
    },
  }
  return env[NODE_ENV]
}

export default getConfig
