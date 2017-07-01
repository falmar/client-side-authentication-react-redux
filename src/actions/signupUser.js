import axios from 'axios';
import { browserHistory} from 'react-router';
import  {AUTH_USER, AUTH_ERROR} from  './types';
import authError from './error';
const ROOT_URL = 'http://localhost:3000/';
let result;

 
export default function signinUser(email, password) {
  return function (dispatch) {

    // Submit email/password to the server
   result = axios.post(`${ROOT_URL}signup`, { email, password })      
      .then((response) => {        
        //update state
        dispatch({
          type: AUTH_USER
        });
        //save jwt token to local storage
        localStorage.setItem('jwt_web_token', response.data.jwt_web_token);
        //redirect navigation on signin

        browserHistory.push('/signin');
      })
       .catch((error) => {       

        setTimeout(function(){ dispatch(authError('Hey your Email already exists with us')); }, 1200);
       
      });
  };
}