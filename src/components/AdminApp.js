import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './nav/Nav'
import Auth from './auth/AuthGateway'
// import Dashboard from './dashboards/dashboard'
import Profile from './profile/Profile'
import PersonList from './list/person/index'
import PersonCreate from './create/person/index'
import PersonView from './view/person/index'
import PersonEdit from './edit/person/index'
import ClientList from './list/client/index'
import ClientCreate from './create/client/index'
import ClientView from './view/client/index'
import ClientEdit from './edit/client/index'
import LeadList from './list/lead/index'
import LeadCreate from './create/lead/index'
import LeadView from './view/lead/index'
import LeadEdit from './edit/lead/index'
import ArticleList from './list/article/index'
import ArticleCreate from './create/article/index'
import ArticleView from './view/article/index'
import ArticleEdit from './edit/article/index'
import Router from './common/Router'
// import DevTools from './dashboards/devtools'
import Board from './board/Board'
import LevelUp from '../components/levelup/LevelUp'
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
      <Route path="/admin/:type/:action/:id" component={Router} />
      {/* <Route exact path="/admin/people" component={PersonList} />
      <Route exact path="/admin/people/create" component={PersonCreate} />
      <Route exact path="/admin/people/view/:person_serialNumber" component={PersonView} />
      <Route exact path="/admin/people/edit/:person_serialNumber" component={PersonEdit} />
      <Route exact path="/admin/clients" component={ClientList} />
      <Route exact path="/admin/clients/create" component={ClientCreate} />
      <Route exact path="/admin/clients/view/:client_serialNumber" component={ClientView} />
      <Route exact path="/admin/clients/edit/:client_serialNumber" component={ClientEdit} />
      <Route exact path="/admin/leads" component={LeadList} />
      <Route exact path="/admin/leads/create" component={LeadCreate} />
      <Route exact path="/admin/leads/view/:lead_serialNumber" component={LeadView} />
      <Route exact path="/admin/leads/edit/:lead_serialNumber" component={LeadEdit} />
      <Route exact path="/admin/articles" component={ArticleList} />
      <Route exact path="/admin/articles/create" component={ArticleCreate} />
      <Route exact path="/admin/articles/view/:article_slug" component={ArticleView} />
      <Route exact path="/admin/articles/edit/:article_slug" component={ArticleEdit} />
      <Route exact path="/admin/levelup" component={LevelUp} />
      <Route path="*" component={NotFoundPage} /> */}
    </Switch>
  </Auth>,
])

export default AdminApp
