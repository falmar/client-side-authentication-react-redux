import axios from 'axios';
import { FETCH_DATA } from './types';
import authError from './error';

const ROOT_URL = 'http://localhost:3000';
//const config = {headers: {authorization: localStorage.getItem('jwt_web_token')}};
export default function fetchData(){
  
 return function(dispatch) {
    axios.get(ROOT_URL, {headers: {authorization: localStorage.getItem('jwt_web_token')}})
      .then(res => {               
        dispatch( {
          type: FETCH_DATA,
          payload: res.data.message
        });
      })
      .catch(() => {        
        dispatch(authError('Please Login'));
      });
 };
  
}