import React, { Component } from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from './reducers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import './App.css';
import Welcome from './pages/Welcome';
import About from './pages/About';
import ConfigManger from './pages/ConfigManger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// const MENU = [
//   { path: '/', exact: true, render: () => <Redirect to="/list" /> },
//   { path: '/list', component: Welcome },
//   { path: '/about', component: About },
//   { path: '/config', component: ConfigManger },
// ];

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk))
);

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
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
                  <li>
                    <Link to="/config">config</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/list" component={Welcome} />
                <Route path="/about" component={About} />
                <Route path="/config" component={ConfigManger} />
                <Route path="/">
                  <Welcome />
                </Route>
              </Switch>
            </div>
          </Router>
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
