import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { configureStore, history } from './store/'
import client from './components/apolloClient'
import Landing from './components/landing/Landing'
import Register from './components/auth/register/Register'
import SignIn from './components/auth/signin/Signin'
import AdminApp from './components/AdminApp'
import NotFoundPage from './components/404'
import './Root.css'
import './animate.css'

const store = configureStore()

/**
 * The Root Component is responsible for loading the Register and Sign In Views.
 * Any other views are protected.
 */
const Root = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={withRouter(Landing)} />
          <Route exact path="/register" component={withRouter(Register)} />
          <Route exact path="/signin" component={withRouter(SignIn)} />
          <Route path="/admin" component={withRouter(AdminApp)} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </ConnectedRouter>
    </ApolloProvider>
  </Provider>
)

export default Root
