import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Bio, Portfolio, Contact } from './Pages/index'
import { Header, NavBar } from './Components/index'
import './App.css';



function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
