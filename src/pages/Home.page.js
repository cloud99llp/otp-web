
import { useNavigate } from 'react-router';
import { getCookie } from '../cookies';
import React, { useEffect } from 'react';

function App() {
  let navigate = useNavigate();
  
  useEffect(() => {
    if(!getCookie('jwt') || getCookie('jwt') === "login"){
        navigate("/login");
      }
    });
  return (
    <div>
        <h1>This is Home page</h1>
    </div>
  );
}

export default App;

