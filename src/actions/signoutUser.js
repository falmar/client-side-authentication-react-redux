import  { UNAUTH_USER} from  './types';



export default function signoutUser(){
  // this clears the localstorage token !important
  localStorage.removeItem('jwt_web_token');
  
  return {
    type: UNAUTH_USER
  };

  
}