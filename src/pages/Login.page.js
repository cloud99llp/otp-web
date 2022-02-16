// import logo from './logo.svg';
import { useNavigate } from 'react-router';
import React, { useState, useEffect } from 'react';
import { postcall } from '../api-calls';
import { getCookie, setCookie } from '../cookies';

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();
    
    function onCreateInputsCancel(){
        postcall('/login',{
            username: username,
            password: password
        }).then((response)=>{
            if(response.status === "Success"){
                setCookie("jwt", "login");
                navigate('/otp');
            }else{
                setErrorMessage(response.message);
            }
        }).catch((err)=>{
            setErrorMessage(err.message);
        })
    }
    function onChange(event){
        setUsername(event.target.value);
    }
    function onChangep(event){
        setPassword(event.target.value);
    }

    useEffect(() => {
    if(getCookie('jwt') && getCookie('jwt') !== "login"){
      navigate("/home");
    }
  });

  return (
    <div className="d-flex justify-content-center">
        <div>
        <h1>This is Login page</h1>
        <div>{errorMessage}</div>
        <div>
            <input type="text" placeholder="Username" onChange={onChange} value={username}/>
        </div>
        <div>
            <input type="text" placeholder="Password" onChange={onChangep} value={password}/>
        </div>
        <button onClick={onCreateInputsCancel}>Login</button>
        </div>
    </div>
  );
}

export default App;
