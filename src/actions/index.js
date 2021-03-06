import axios from 'axios';
import { browserHistory} from 'react-router';
import  {AUTH_USER} from  './types';
import authError from './error';
import { ROOT_URL } from '../../.env';



export default function signinUser(email, password) {
  return function (dispatch) {

    // Submit email/password to the server
    axios.post(`${ROOT_URL}signin`, { email, password })
      .then((response) => {
        //update state
        dispatch({
          type: AUTH_USER
        });
        //save jwt token to local storage
        localStorage.setItem('jwt_web_token', response.data.jwt_web_token);
        //redirect navigation on signin

        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Email or Password are incorrect'));
      });
  };
}