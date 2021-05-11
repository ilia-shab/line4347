import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from '../src/Main/Main';
import Form from '../src/Form/Form'
 

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/form' component={Form} />
          </Switch>  
      </Router>     
    </div>
  );
}

export default App;
