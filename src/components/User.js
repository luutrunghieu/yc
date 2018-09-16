import React, { Component } from "react";
import {Link} from "react-router-dom";
import { fetchUserInfo } from "../apis/api";
import "./User.css";
export default class User extends Component {
  state = {};
  componentDidMount() {
    this.getUserInfo(this.props.match.params.userId);
  }
  getUserInfo = async userId => {
    const user = await fetchUserInfo(userId);
    this.setState({ user });
  };
  render() {
    if (this.state.user) {
      return (
        <table className="user-table">
          <tbody>
            <tr>
              <td>user: </td>
              <td>{this.state.user.id}</td>
            </tr>
            <tr>
              <td>created:</td>
              <td>{this.state.user.created}</td>
            </tr>
            <tr>
              <td>karma:</td>
              <td>{this.state.user.karma}</td>
            </tr>
            <tr>
              <td>about</td>
              <td />
            </tr>
            <tr>
              <td />
              <td><Link to={`/submitted/${this.state.user.id}`}>submissions</Link></td>
            </tr>
            <tr>
              <td />
              <td>comments</td>
            </tr>
            <tr>
              <td />
              <td>favorites</td>
            </tr>
          </tbody>
        </table>
      );
    }
    return <span className="container">No data</span>;
  }
}
