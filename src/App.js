import { Redirect } from 'react-router';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Welcome from './pages/Welcome';
import About from './pages/About';

const MENU = [
  { path: '/', exact: true, render: () => <Redirect to="/list" /> },
  { path: '/list', component: Welcome },
  { path: '/about', component: About },
];

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/list">Welcome</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/list" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </div>
      </Router>
    )
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
  }
}

export default App;
