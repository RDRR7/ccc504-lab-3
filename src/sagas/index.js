import { takeEvery } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import * as api from '../api'
import * as actions from '../actions'

function* startSessionSaga() {
	const session = yield api.startSession()
	yield put(actions.receiveSession(session));
}

function* fetchBeersSaga() {
	const state = yield select();
	if (state.beers.isFetching) {
		return
	}
	yield put(actions.fetchingBeers(true));
	try {
		const beers = yield call(api.getBeers, state.settings.session.id)
		yield put(actions.fetchingBeers(false));
		yield put(actions.receiveBeers(beers));
	} catch (e) {
		yield put(actions.fetchingBeers(false));
	}
}

export default function* rootSaga() {
	yield takeEvery(actions.START_SESSION_SAGA, startSessionSaga)
	yield takeEvery(actions.FETCH_BEERS_SAGA, fetchBeersSaga)
}
