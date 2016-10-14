'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router, hashHistory, IndexRoute} from 'react-router';
import store from './store';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer'
import {getPuppies, getPuppy} from './action-creators';


function loadPuppies(nextState){
	store.dispatch(getPuppies())
}

function loadPuppy(nextState){
	const puppyId = nextState.params.puppyId
	store.dispatch(getPuppy(puppyId))
}

ReactDOM.render(
	<Provider store = {store}>
		<div className="container flexbox-container">
		   <div className="jumbotron">
			<Router history={hashHistory}>
		    	<Route path='/'>
		    		<IndexRoute 
		    			component={AllPuppiesContainer}
		    			onEnter = {loadPuppies} />
		      		<Route path='puppies'>
		      			<IndexRoute component={AllPuppiesContainer}
		      			onEnter = {loadPuppies} />
		      			<Route 
		      				path=':puppyId' 
		      				component={SinglePuppyContainer}
		      				onEnter = {loadPuppy} />

		      		</Route>
		      	</Route>
			</Router>
		</div>
	</div>
  </Provider>,
  document.getElementById('app')
);