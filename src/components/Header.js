import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default class extends Component {
  state = {
    navItems: ["new", "comments", "show", "ask", "jobs", "submit"]
  };
  render() {
    return (
      <nav>
        <ul className="container header">
          <li className="logo">
            <Link to="/">Y</Link>
          </li>
          <li className="title">
            <Link to="/news">Hacker News</Link>
          </li>
          <ul className="tabs">
            {this.state.navItems.map((item, index) => (
              <li key={index}>
                <Link to={`/${item}`} className="tab">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <li className="login-tab"><Link to="/login">login</Link></li>
        </ul>
      </nav>
    );
  }
}
