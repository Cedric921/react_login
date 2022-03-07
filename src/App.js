
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login';
import Logon from './components/Logon';
import ImageBg from './assets/login.svg';

function App() {
  const logon = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className='App'>

      <Router>
        <Route path='/' componen={Logon} exact/>
        <Route path='/login' componen={Login} />
        <Logon onLogon={logon} />
      </Router>

      <div className='image'>
        <img src={ImageBg} alt='' />
      </div>
    </div>
  )
}

export default App;
