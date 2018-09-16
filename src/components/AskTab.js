import React, { Component } from "react";
import Item from "./Item";
import { fetchItemDetail, fetchAskStoryIds } from "../apis/api";
export default class AskTab extends Component {
  state = {
    index: 0,
    step: 30,
    ids: [],
    askStories: []
  };
  componentDidMount() {
    this.getFirst();
  }

  getAskStoryIds = async () => {
    const ids = await fetchAskStoryIds();
    this.setState({ ids });
  };

  getAskStories = async ids => {
    const askStoriesPromises = ids.map(async id => {
      const askStory = await fetchItemDetail(id);
      return askStory;
    });
    const askStories = await Promise.all(askStoriesPromises);
    this.setState({ askStories, index: this.state.index + this.state.step });
  };

  getFirst = async () => {
    await this.getAskStoryIds();
    this.getAskStories(
      this.state.ids.slice(this.state.index, this.state.index + this.state.step)
    );
  };

  render() {
    return (
        <div>
        {this.state.askStories.map((item, index) => (
          <Item item={item} index={index} />
        ))}
      </div>
    );
  }
}
