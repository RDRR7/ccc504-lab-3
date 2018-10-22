import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'

// Tip: check this post: https://www.javascriptjanuary.com/blog/may-cause-side-effects-how-to-implement-redux-sagas-as-middleware

// Tip: replace the thunk and promise middleware with the redux-saga middleware

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware()

	const store = createStore(
		reducers,
		applyMiddleware(sagaMiddleware, createLogger())
	)

	return {
		...store,
		// Tip: you have to add something here from redux-saga
		runSaga: sagaMiddleware.run
	}
}

export default configureStore
