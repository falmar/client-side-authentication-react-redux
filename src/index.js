import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import reducers from './reducers';
import thunk from 'redux-thunk';

import Signin from '../src/components/auth/signin';
import Signout from '../src/components/auth/signout';
import Signup from '../src/components/auth/signup';
import Feature from '../src/components/feature';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/signin" component={Signin} />
				<Route path="/feature" component={Feature} />			
				<Route path='/signout' component={props => <Signout lat={-34.397} lng ={150.644}  />} />
				<Route path='/signup' component={Signup} />
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container'));

						