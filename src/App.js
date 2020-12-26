import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// My styles
import './styles/main.css';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.css'
// My components
import Navbar from './components/navbar';


// Main component with roter 
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p2"> 
        <Switch>
          <Route exact path="/">
            Inicio
          </Route>
          <Route path="/chat">
            chat
          </Route>
          <Route>404</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
