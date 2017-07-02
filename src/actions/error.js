import  {AUTH_ERROR, CLEAR_ERROR} from  './types';


export default function authError(error){
 return function(dispatch) {  
            
        dispatch( {
          type: AUTH_ERROR,
          payload: error
        });
     
        setTimeout(() => {
          dispatch({
            type: CLEAR_ERROR
          });

        }, 4000);
 };
}
