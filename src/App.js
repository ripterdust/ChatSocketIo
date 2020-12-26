import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// My styles
import './styles/main.css';

// My components
import Navbar from './components/navbar';


// Main component with roter 
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          Inicio
        </Route>
        <Route path="/chat">
          chat
        </Route>
        <Route>404</Route>
      </Switch>
    </Router>
  );
}

export default App;
