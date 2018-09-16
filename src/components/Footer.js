import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Footer.css';
export default class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footer-title">Applications are open for YC Winter 2019</div>
        <ul className="footer-tabs">
            <li><Link to="">Guidlines |</Link></li>
            <li><Link to="">FAQ |</Link></li>
            <li><Link to="">Support |</Link></li>
            <li><Link to="">API |</Link></li>
            <li><Link to="">Security |</Link></li>
            <li><Link to="">Lists |</Link></li>
            <li><Link to="">Bookmarklet |</Link></li>
            <li><Link to="">Legal |</Link></li>
            <li><Link to="">Apply to YC |</Link></li>
            <li><Link to="">Contact</Link></li>
        </ul>
        <div className="footer-search">
            <span>Search</span>
            <input type="text"/>
        </div>
      </div>
    );
  }
}
