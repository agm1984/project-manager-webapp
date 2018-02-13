import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer as router, routerMiddleware } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import createHistory from 'history/createBrowserHistory'
import { reduxThunk, logger } from './middleware'
import reg from '../components/auth/register/reg_reducer'
import auth from '../components/auth/signin/auth_reducer'
import nav from '../components/nav/nav_reducer'
import createArticle from '../components/create/article/article_create_reducer'
import editArticle from '../components/edit/article/article_edit_reducer'

/**
 * Upon initialization, Redux reducers are combined and loaded into the app state.
 * This app follows the Folder-as-a-Component Architecture Pattern to
 * minimize coupling and to maximize scalability. This also promotes
 * multi-developer workflow by minimizing file collisions and merge conflicts.
 */
const reducers = combineReducers({
  reg, auth, router, nav, form, createArticle, editArticle,
})

/**
 * History is exported as a Singleton. History-related Redux helper methods
 * are added into middleware, and the History Object is loaded into the Router
 * in the Root Component.
 */
export const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const middleware = [reduxThunk, logger, historyMiddleware]

/**
 * The Store is exported and initialized in the Root Component.
 * A serialized state object can be injected in at run-time by
 * passing it into the configureStore Function.
 */
export const configureStore = (savedStore) => {
  const persistedState = {
    ...savedStore,
  }
  return createStore(
    reducers,
    persistedState,
    applyMiddleware(...middleware),
  )
}
