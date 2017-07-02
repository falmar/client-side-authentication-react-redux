import  { UNAUTH_USER} from  './types';



export default function signoutUser(){
  localStorage.removeItem('jwt_web_token');
  return {
    type: UNAUTH_USER
  };

  
}