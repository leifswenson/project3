import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import About from "./pages/About";
import ResourcesIndex from './pages/resources/ResourcesIndex';
import ResourceView from './pages/resources/ResourceView';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Style
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="app">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/resources" component={ResourcesIndex} />
              <Route exact path="/resources/:id" component={ResourceView} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
