import  {AUTH_ERROR} from  './types';

export default function authError(error){
  
  return {
    type: AUTH_ERROR,
    payload: error
  }
  }