import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component = {Dashboard}/>
        </Switch>
    </Router>

  );
}

export default App;
