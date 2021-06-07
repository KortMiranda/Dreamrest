import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './views/auth/Login'
import Signup from './views/auth/Signup'
import Logout from './views/auth/Logout'
import Dashboard from './app/Dashboard'
import AddCard from './components/AddCard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/dream-builder" component={AddCard} />
      </Switch>
    </div>
  );
}

export default App;
