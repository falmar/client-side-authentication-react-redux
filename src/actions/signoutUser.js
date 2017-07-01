import  { UNAUTH_USER} from  './types';



export default function signoutUser(){
  return {
    type: UNAUTH_USER
  };
}