import React from 'react';
import {Button} from 'react-bootstrap';
import {NavBar, Nav, NavItem, Navbar, FormControl, Form} from 'react-bootstrap';
import NavB from './navbarComp.jsx';
import SignUp from './signUpComp.jsx';
import BuisnessDetail from './page2comp.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import Campaign from './page3comp.jsx';
import Finish from './finishComp.jsx'

function App() {
  return (
   <>
   <BrowserRouter>
   <div className="App">
  <NavB/>
  <Route exact path='/seeda' component={SignUp} />
  <Route path='/About' component={BuisnessDetail} />
  <Route path='/finish/*' component={Finish} />
 
  </div>
  </BrowserRouter>
  </>
  );
}

export default App;
