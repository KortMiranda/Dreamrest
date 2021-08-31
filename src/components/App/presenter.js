import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import { Route, Switch } from 'react-router-dom'
import Auth from '../Auth'
import Navigation from '../Navigation'
import Dashboard from '../Dashboard'
// import axios from 'axios'
// import Login from './views/auth/Login'
// import Signup from './views/auth/Signup'
// import Logout from './views/auth/Logout'
// import Dashboard from './app/Dashboard'
// import AddCard from './components/AddCard'
// import CardDetails from './components/CardDetails'
// import EditForm from './components/EditForm'
// import UserProfile from './components/UserProfile'
// import MyProfile from './components/MyProfile'

const App = props => [
    props.isLoggedIn ? <Navigation key={0} /> : null,
    props.isLoggedIn ? <PrivateRoute key={1} /> : <PublicRoute key={1} />
]

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

const PrivateRoute = props => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
    </Switch>
)

const PublicRoute = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/recover" render={() => "recover password"}/>
    </Switch>
)
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Switch>
//       <Route exact path="/" component={Dashboard} />
//       <Route exact path="/login" component={Login} />
//       <Route exact path="/signup" component={Signup} />
//       <Route exact path="/logout" component={Logout} />
//       <Route exact path="/dream-builder" component={AddCard} />
//       <Route exact path="/card/:id" component={CardDetails} />
//       <Route exact path="/user/:id" component={UserProfile} />
//       <Route exact path="/my-cards/:id" component={MyProfile} />
//       <Route exact path="/edit/:id" component={EditForm} />
//       </Switch>
//     </div>
//   );
// }

export default App;