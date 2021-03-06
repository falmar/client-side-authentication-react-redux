import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {AUTH_USER} from './actions/types';

import AuthGuard from './components/auth/authGuard';
import Welcome from '../src/components/welcome';
import Signin from '../src/components/auth/signin';
import Signout from '../src/components/auth/signout';
import Signup from '../src/components/auth/signup';
import Feature from '../src/components/feature';
import ErrorPage from '../src/components/404';


//redux dev tools setup
const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f 
);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, enhancers);
const token = localStorage.getItem('jwt_web_token');

//if jwt token in localstorage the we presume user is authorized and dispatch an action.
if(token){
	store.dispatch({
		type: AUTH_USER
	});
}



ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Welcome} />
				<Route path="/signin" component={Signin} />
				<Route path="/feature" component={AuthGuard(Feature)} />			
				<Route path='/signout' component={props => <Signout lat={-34.397} lng ={150.644}  />} />
				<Route path='/signup' component={Signup} />
				<Route path='/*' component={ErrorPage} />
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container'));

						