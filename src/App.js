import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home.js";
// import About from "./components/About.js";
// import Topics from "./components/Topics.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/" />
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li> */}
          </ul>

          <Route exact={true} path="/" component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
