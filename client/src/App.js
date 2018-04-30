import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import About from "./pages/About";
import ResourcesIndex from './pages/resources/ResourcesIndex';
import ResourcesShow from './pages/resources/ResourcesShow';
import ResourcesNew from './pages/resources/ResourcesNew';
import NoMatch from './pages/NoMatch/NoMatch';
import UsersNew from './pages/users/UsersNew';


// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Style
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
        {/*above div had class="app", changed it to 
        className="app", but don't know what it does*/}
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/resources" component={ResourcesIndex} />
              <Route exact path="/resources/id" component={ResourcesShow} />
              <Route exact path="/resources/new" component={ResourcesNew} />
              <Route exact path="/users/new" component={UsersNew} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
