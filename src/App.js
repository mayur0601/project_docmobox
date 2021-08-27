
import './App.css';
import Home from './componets/Home'
import Sign from './componets/SignIn'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
   <div className="app">
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/sign" component={Sign} />
       </Switch>
      </Router>
   </div>
  );
}

export default App;
