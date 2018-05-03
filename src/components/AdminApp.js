import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './nav/Nav'
import Auth from './auth/AuthGateway'
import Profile from './profile/Profile'
import Board from './board/Board'
import Router from './common/Router'
import NotFoundPage from './404'

/**
 * The Admin App Component is responsible for rendering admin CRUD functionality
 * that is only available to signed in users.
 *
 * The Auth Gateway Component checks if the user is signed in.
 * If so, children can be loaded.
 */
const AdminApp = () => ([
  <Nav key="NavBar" />,
  <Auth key="AuthGateway">
    <Switch>
      <Route exact path="/admin" component={Board} />
      <Route exact path="/admin/board" component={Board} />
      <Route exact path="/admin/profile" component={Profile} />
      <Route exact path="/admin/:type" component={Router} />
      <Route exact path="/admin/:type/:action" component={Router} />
      <Route exact path="/admin/:type/:action/:id" component={Router} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Auth>,
])

export default AdminApp
