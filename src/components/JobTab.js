import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import { fetchItemDetail, fetchJobStoryIds } from "../apis/api";
export default class JobTab extends Component {
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
    const ids = await fetchJobStoryIds();
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

  render() {
    return (
      <div>
        {this.state.newStories.map((item, index) => (
          <div className="container item">
            <div className="index">
              <span>{index + 1}.</span>
              <Icon type="caret-up" theme="outlined" />
            </div>
            <div className="item-content">
              <div className="item-title">
                <a href={item.url}>{item.title}</a>
              </div>
              <div className="sub-text">
                <Link to="">8 hours ago</Link>
              </div>
            </div>
          </div>
        ))}
        <span className="container more">
          <Link to="">More</Link>
        </span>
      </div>
    );
  }
}
