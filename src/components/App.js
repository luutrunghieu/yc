import React, { Component } from "react";
// import { Row, Col } from 'antd';
import { BrowserRouter, Link, Route } from "react-router-dom";
// import { Container, Row, Col } from "reactstrap";

import NewTab from "./NewTab";
import CommentTab from "./CommentTab";

import "./App.css";
class App extends Component {
  state = {
    navItems: ["new", "comments", "show", "ask", "jobs", "submit"]
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul className="container">
              <li className="logo">
                <Link to="/">Y</Link>
              </li>
              <li className="title">
                <Link to="/">Hacker News</Link>
              </li>
              <ul className="tabs">
                {this.state.navItems.map(item => (
                  <li>
                    <Link to={`/${item}`} className="tab">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <li className="login">login</li>
            </ul>
          </nav>
          <Route exact path="/" />
          <Route path="/new" component={NewTab} />
          <Route path="/comments" component={CommentTab} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
