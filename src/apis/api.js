var fetch = require("node-fetch");
fetchNewStories = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );
  const ids = await response.json();
  const newStories = [];
  ids.map(async id => {
      const newResponse = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const newStory = await newResponse.json();
      newStories.push(newStory);
  });
  return newStories;
};

fetchNewStories();
