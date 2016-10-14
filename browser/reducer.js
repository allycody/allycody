import {combineReducers} from 'redux';
import {GET_PUPPIES} from './action-creators';
import {GET_PUPPY} from './action-creators';



/*const hardcodedPuppy = {
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};*/

const initialState = { 
	allPuppies: [],
	selectedPuppy: {}
	}

function allPuppies(state = initialState.allPuppies, action){
	console.log('action.type: ', action.type);
	console.log('action.allPuppies: ', action.allPuppies);
	console.log('state: ', state);
	switch(action.type){
		case GET_PUPPIES:
			return action.allPuppies
		default: return state;
	}
}

function selectedPuppy(state = initialState.selectedPuppy, action){
	console.log('action.type: ', action.type);
	console.log('action.allPuppies: ', action.selectedPuppy);
	console.log('state: ', state);
	switch(action.type){
		case GET_PUPPY:
			return action.selectedPuppy;
		default: return state;
	}
}

const rootReducer = combineReducers({
	allPuppies,
	selectedPuppy
})

export default rootReducer;