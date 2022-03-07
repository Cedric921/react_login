
import './App.css';
//import Login from './components/Login';
import Logon from './components/Logon';
import ImageBg from './assets/login.svg';

function App() {
  const logon = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className="App">
      <Logon onLogon={logon}/>
      <div className="image">
        <img src={ImageBg} alt="" />
      </div>
    </div>
  );
}

export default App;
