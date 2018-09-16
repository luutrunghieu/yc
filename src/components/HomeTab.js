import React, { Component } from "react";
import Item from "./Item";
import { fetchItemDetail, fetchTopStoryIds } from "../apis/api";
export default class HomeTab extends Component {
  state = {
    index: 0,
    step: 30,
    ids: [],
    topStories: []
  };
  componentDidMount() {
    this.getFirst();
  }

  getTopStoryIds = async () => {
    const ids = await fetchTopStoryIds();
    this.setState({ ids });
  };

  getTopStories = async ids => {
    const topStoriesPromises = ids.map(async id => {
      const topStory = await fetchItemDetail(id);
      return topStory;
    });
    const topStories = await Promise.all(topStoriesPromises);
    this.setState({ topStories, index: this.state.index + this.state.step });
  };

  getFirst = async () => {
    await this.getTopStoryIds();
    this.getTopStories(
      this.state.ids.slice(this.state.index, this.state.index + this.state.step)
    );
  };

  render() {
    return (
        <div>
            {this.state.topStories.map((item,index)=>(
                <Item item={item} index={index}/>
            ))}
        </div>
    );
  }
}
