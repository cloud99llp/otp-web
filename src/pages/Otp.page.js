// import logo from './logo.svg';
import { useNavigate } from 'react-router';
import React, { useState, useEffect } from 'react';
import { postcall } from '../api-calls';
import { getCookie, setCookie } from '../cookies';

function App() {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();
  function onCreateInputsCancel(){
    postcall('/verify_otp',{
        otp: otp
    }).then((response)=>{
        if(response.status === "Success"){
            setCookie("jwt", response.jwtToken);
            navigate('/home');
        }else{
            setErrorMessage(response.message);
        }
    }).catch((err)=>{
        setErrorMessage(err.message);
    })
}

useEffect(() => {
    if(getCookie('jwt') && getCookie('jwt') !== "login"){
      navigate("/home");
    }else if(!getCookie('jwt')){
      navigate("/login");
    }
  });
function onChange(event){
  setOtp(event.target.value);
}
  return (
    <div className="d-flex justify-content-center">
      <div>
          <h1>This is OTP page</h1>
          <div>{errorMessage}</div>
          <div>
              <input type="text" placeholder="OTP" onChange={onChange} value={otp}/>
          </div>
          <button onClick={onCreateInputsCancel}>Submit</button>
      </div>
    </div>
  );
}

export default App;
