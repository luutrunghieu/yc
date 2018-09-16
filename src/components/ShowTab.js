import React, { Component } from "react";
import Item from "./Item";
import { fetchItemDetail, fetchShowStoryIds } from "../apis/api";
export default class ShowTab extends Component {
  state = {
    index: 0,
    step: 30,
    ids: [],
    showStories: []
  };
  componentDidMount() {
    this.getFirst();
  }

  getShowStoryIds = async () => {
    const ids = await fetchShowStoryIds();
    this.setState({ ids });
  };

  getShowStories = async ids => {
    const showStoriesPromises = ids.map(async id => {
      const showStory = await fetchItemDetail(id);
      return showStory;
    });
    const showStories = await Promise.all(showStoriesPromises);
    this.setState({ showStories, index: this.state.index + this.state.step });
  };

  getFirst = async () => {
    await this.getShowStoryIds();
    this.getShowStories(
      this.state.ids.slice(this.state.index, this.state.index + this.state.step)
    );
  };

  render() {
    return (
      <div>
        {this.state.showStories.map((item, index) => (
          <Item item={item} index={index} />
        ))}
      </div>
    );
  }
}
