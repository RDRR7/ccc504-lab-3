import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

// Tip: check this post: https://www.javascriptjanuary.com/blog/may-cause-side-effects-how-to-implement-redux-sagas-as-middleware

// Tip: replace the thunk and promise middleware with the redux-saga middleware

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(
      thunk,
      promise,
      createLogger()
    )
  )

  return {
    ...store
    // Tip: you have to add something here from redux-saga
  }
}

export default configureStore
