import './App.css';
import React, { } from 'react'
import Pokemon from './component/pokemon'
import { Navbar, Nav } from 'react-bootstrap'
import Fav from './component/fav'
import Detail from './component/detail'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Link to="/"><Navbar.Brand>Pokemon Apps</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/fav"><Nav.Link href="/">Favorite</Nav.Link></Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br></br>

          <Switch>
            <Route exact path="/" component={Pokemon} />
            <Route path="/fav" component={Fav} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App