import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import { fetchItemDetail, fetchNewStoryIds } from "../apis/api";
export default class NewTab extends Component {
  state = {
    index: 0,
    step: 30,
    ids: [],
    newStories: []
  };
  componentDidMount() {
    this.getFirst();
  }

  getNewStoryIds = async () => {
    const ids = await fetchNewStoryIds();
    this.setState({ ids });
  };

  getNewStories = async ids => {
    const newStoriesPromises = ids.map(async id => {
      const newStory = await fetchItemDetail(id);
      return newStory;
    });
    const newStories = await Promise.all(newStoriesPromises);
    this.setState({ newStories, index: this.state.index + this.state.step });
  };

  getFirst = async () => {
    await this.getNewStoryIds();
    this.getNewStories(
      this.state.ids.slice(this.state.index, this.state.index + this.state.step)
    );
  };

  handleClickMore = () => {
    this.getNewStories(
      this.state.ids.slice(this.state.index, this.state.index + this.state.step)
    );
  };

  render() {
    return (
      <div>
        {this.state.newStories.map((item, index) => (
          <div className="container item">
            <div className="index">
              <span>{this.state.index +index -29}.</span>
              <Icon type="caret-up" theme="outlined" />
            </div>
            <div className="item-content">
              <div className="item-title">
                <a href={item.url}>{item.title}</a>
              </div>
              <div className="sub-text">
                {item.score} points by <Link to="">{item.by}</Link>{" "}
                <Link to="">8 hours ago</Link> | <Link to="">hide</Link> |{" "}
                <Link to="">past</Link>| <Link to="">web</Link> |{" "}
                <Link to="">discuss</Link>
              </div>
            </div>
          </div>
        ))}
        <span className="container more" onClick={this.handleClickMore}>
          More
        </span>
      </div>
    );
  }
}
