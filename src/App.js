// import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router';

function App() {
  let navigate = useNavigate();
  function onCreateInputsCancel(){
    navigate("/login");
}
  return (
    <div>
        <h1>This is landing page</h1>
        <button onClick={onCreateInputsCancel}>Login</button>
    </div>
  );
}

export default App;
