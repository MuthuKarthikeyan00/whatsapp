import React from 'react'

import logo from '../img/w2.png';
import logo2 from '../img/google.png';
import "./style.css";
import {auth,provider} from "./firebase";

import {useStateValue} from '../reducer/StateProvider';
import { action } from '../reducer/Reducer';



const Login = () => {
    
    const [{user}, dispatch] = useStateValue();

const sigIN=()=>{
    const mk= document.getElementById('log');
    mk.classList.add('bgb');

    auth.signInWithPopup(provider).then((result)=>{
             dispatch({
                 type:action.actionType,
                 user:result.user,
             });
    }).catch((error)=>alert(error.message));


}

    return (
            <div id='log' className="Login">
      <div className="Login__container">
     <div className="Login__container2">
     <img src={logo} alt='logo'></img>
      <h2>SIGN IN WITH GOOGLE<br></br> ACCOUNT</h2>
     <div  onClick={sigIN} className="Login__containerGOOGLE"> 
     <img src={logo2} alt="clickme"></img>`click It
     </div>
    
     </div>
    
      </div>
           
        </div>

        
    )
}

export default Login
