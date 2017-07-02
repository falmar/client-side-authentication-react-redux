import axios from 'axios';
import { browserHistory} from 'react-router';
import  {AUTH_USER} from  './types';
import authError from './error';
const ROOT_URL = 'http://localhost:3000/';



 
export default function signupUser(email, password) {
  return function (dispatch) {

    // Submit email/password to the server
   axios.post(`${ROOT_URL}signup`, { email, password })      
      .then(response => {        
        //update state
        dispatch({
          type: AUTH_USER
        });
        //save jwt token to local storage
        localStorage.setItem('jwt_web_token', response.data.jwt_web_token);
        //redirect navigation on signin

        browserHistory.push('/feature');
      })
       .catch(error=> {
         dispatch(authError(error.response.data.error));  
             
       });
  };
}