import React, { Component } from "react";
import Item from "./Item";
import { fetchItemDetail, fetchUserInfo } from "../apis/api";
export default class Submitted extends Component {
  state = {
    index: 0,
    step: 30,
    ids: [],
    submittedStories: []
  };
  componentDidMount() {
    this.getFirst();
  }

  getSubmittedStoryIds = async (userId) => {
    const {submitted} = await fetchUserInfo(userId);
    console.log(submitted);
    this.setState({ ids:submitted });
  };

  getSubmittedStories = async ids => {
    const submittedStoriesPromises = ids.map(async id => {
      const submittedStory = await fetchItemDetail(id);
      return submittedStory;
    });
    const submittedStories = await Promise.all(submittedStoriesPromises);
    this.setState({ submittedStories, index: this.state.index + this.state.step });
  };

  getFirst = async () => {
    await this.getSubmittedStoryIds(this.props.match.params.userId);
    this.getSubmittedStories(
      this.state.ids.slice(this.state.index, this.state.index + this.state.step)
    );
  };

  render() {
    return (
      <div>
        {this.state.submittedStories.map((item, index) => (
          <Item item={item} index={index} />
        ))}
      </div>
    );
  }
}
