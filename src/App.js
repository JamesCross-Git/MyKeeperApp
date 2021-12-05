import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import Hobbies from './Components/Hobbies/Hobbies';
import Noteboard from './Components/Noteboard/Noteboard';
import NavBar from './Components/Navbar';
import Footer from './Components/Noteboard/Footer';
import { BsTrash } from 'react-icons/fa';

function App() {
    return (
      <div>
    <NavBar />
      <Switch>
          <Route path="/Hobbies">
              <Hobbies />
          </Route>
          <Route path="/Contacts">
            <Contacts />
          </Route>
          <Route path="/">
              <Noteboard />
          </Route>
      </Switch>
      <Footer />
      </div>

    );
  }
  
  export default App;
  