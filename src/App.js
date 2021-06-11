import { Route, Switch } from 'react-router-dom'
import { Context } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './views/auth/Login'
import Signup from './views/auth/Signup'
import Logout from './views/auth/Logout'
import Dashboard from './app/Dashboard'
import AddCard from './components/AddCard'
import CardDetails from './components/CardDetails'
import EditForm from './components/EditForm'
import UserProfile from './components/UserProfile'
import MyProfile from './components/MyProfile'

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
      <Route exact path="/card/:id" component={CardDetails} />
      <Route exact path="/user/:id" component={UserProfile} />
      <Route exact path="/my-cards/:id" component={MyProfile} />
      <Route exact path="/edit/:id" component={EditForm} />
      </Switch>
    </div>
  );
}

export default App;
