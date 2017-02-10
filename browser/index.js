'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router, hashHistory, IndexRoute} from 'react-router';
import store from './store';
import ReactDOM from 'react-dom';



ReactDOM.render(
	<Provider store = {store}>
		<div className="container flexbox-container">
		   <div className="jumbotron">
			TEST
		</div>
	</div>
  </Provider>,
  document.getElementById('app')
);