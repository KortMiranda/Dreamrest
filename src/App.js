import Navbar from './components/Navbar'
import Cards from './components/Cards'
import AddCard from './components/AddCard'
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Cards} />
      <Route exact path="/dream-builder" component={AddCard} />
    </div>
  );
}

export default App;
