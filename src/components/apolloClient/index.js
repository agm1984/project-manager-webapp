import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import getConfig from '../../env/config'

/**
 * Apollo Client 2.0 is setup by defining the connection to the GraphQL Endpoint
 * and sending a JSON Web Token with every request to the server.
 *
 * Web Socket are used to maintain a real-time connection to each user's data,
 * such as XP and level.
 */
// GET CONFIG SETTINGS
const config = getConfig(process.env.NODE_ENV)
const { API_URI, CORS_OPTIONS } = config
const { credentials, mode } = CORS_OPTIONS

// CREATE HTTP LINK
const httpLink = createHttpLink({
  uri: API_URI,
  credentials,
  mode,
})

// CREATE AUTHENTICATION LINK
const authLink = setContext(() => ({
  headers: {
    authorization: JSON.parse(localStorage.getItem('token@omni')) || null,
  },
}))

const link = authLink.concat(httpLink)

// SETUP DATA STORE
const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
  addTypename: true,
})

// EXPORT APOLLO CLIENT
export default new ApolloClient({
  link,
  cache: cache.restore(window.__APOLLO_CLIENT__),
  ssrMode: false,
  connectToDevTools: true,
  queryDeduplication: false,
})
