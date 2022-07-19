import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';

var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  //callback gets passed in data from API call (searchYoutube w/ key & query)
  //dispatch change VideoList with videos passed in to change

  //this would update videolist
  //

  var cb = function (videos) {
    store.dispatch(changeVideoList(videos));
  };

  searchYouTube({key: YOUTUBE_API_KEY, query: q}, cb);
};

export default handleVideoSearch;
