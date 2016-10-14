import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer'
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

console.log('rootReducer: ', rootReducer)

export default createStore(
	rootReducer, 
	applyMiddleware(
		createLogger(), 
		thunkMiddleware
		)
	);