export const fetchNewStoryIds = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );
  const ids = await response.json();
  return ids;
};

export const fetchTopStoryIds = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const ids = await response.json();
  return ids;
};

export const fetchShowStoryIds = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/showstories.json"
  );
  const ids = await response.json();
  return ids;
};

export const fetchAskStoryIds = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/askstories.json"
  );
  const ids = await response.json();
  return ids;
};

export const fetchJobStoryIds = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/jobstories.json"
  );
  const ids = await response.json();
  return ids;
};

export const fetchItemDetail = async id => {
  const itemResponse = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  const itemDetail = await itemResponse.json();
  return itemDetail;
};

export const fetchUserInfo = async id => {
  const userResponse = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`
  );
  const userInfo = await userResponse.json();
  return userInfo;
};
