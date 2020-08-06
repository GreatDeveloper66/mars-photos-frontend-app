import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mars from './Components/Mars'
//import Register from './Components/Register'
//import SignIn from './Components/SignIn'
//import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={ Mars } />
      </Switch>
    </Router>
  );
}

export default App
