import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import getConfig from '../../env/config'

/**
 * Apollo Client 2.0 is setup by defining the connection to the GraphQL Endpoint
 * and by defining how the JSON Web Token is attached to each server request.
 */
const config = getConfig(process.env.NODE_ENV)
const { API_URI, CORS_OPTIONS } = config
const { credentials, mode } = CORS_OPTIONS
const httpLink = createHttpLink({
  uri: API_URI,
  credentials,
  mode,
})
const middlewareLink = setContext(() => ({
  headers: {
    authorization: JSON.parse(localStorage.getItem('token@adam')) || null,
  },
}))
const link = middlewareLink.concat(httpLink)
const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
  addTypename: true,
})

export default new ApolloClient({
  link,
  cache: cache.restore(window.__APOLLO_CLIENT__),
  ssrMode: false,
  connectToDevTools: true,
  queryDeduplication: false,
})
