import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Bio, Contact } from './Pages/index'
import { Header } from './Components/index'
import './App.css';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
