import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import "./Item.css";
export default class Item extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container item">
          <div className="index">
            <span>{this.props.index}.</span>
            <Icon type="caret-up" theme="outlined" />
          </div>
          <div className="item-content">
            <div className="item-title">
              <a href={this.props.item.url}>{this.props.item.title}</a>
            </div>
            <div className="sub-text">
              {this.props.item.score} points by <Link to={`/user/${this.props.item.by}`}>{this.props.item.by}</Link>{" "}
              <Link to="">8 hours ago</Link> | <Link to="">hide</Link> |{" "}
              <Link to="">{this.props.item.kids ? this.props.item.kids.length : 0} comments</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
