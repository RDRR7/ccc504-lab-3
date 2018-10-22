// @flow
import * as api from '../api'

export const CURRENT_BEER_INDEX = 'CURRENT_BEER_INDEX'
export const FETCH_BEERS = 'FETCH_BEERS'
export const FETCHING_BEERS = 'FETCHING_BEERS'
export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const RECEIVE_SESSION = 'RECEIVE_SESSION'
export const START_SESSION = 'START_SESSION'
export const START_SESSION_SAGA = 'START_SESSION_SAGA'
export const FETCH_BEERS_SAGA = 'FETCH_BEERS_SAGA'

/* I'm an action creator (LEVEL 1!)  */
export const receiveSession = (session: Object) => ({
	type: RECEIVE_SESSION,
	session
})

export const fetchingBeers = (isFetching: boolean) => ({
	type: FETCHING_BEERS,
	isFetching
})

export const receiveBeers = (beers: Array<Object>) => ({
	type: RECEIVE_BEERS,
	beers
})

export const setCurrentBeerIndex = (currentIndex: number) => ({
	type: CURRENT_BEER_INDEX,
	currentIndex
})

// Tip: you must replace the following two functions
// with two simpler actions... level 1 maybe?

/* I'm an action that returns promises (LEVEL 2!)  */
export const startSession = () => ({
	type: START_SESSION_SAGA
})

/* I'm an action that dispatches other actions (LEVEL 3!)  */
export const fetchBeers = () => ({
	type: FETCH_BEERS_SAGA,
});
