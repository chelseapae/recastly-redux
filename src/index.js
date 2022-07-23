import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import { Provider } from 'react-redux';
import store from './store/store.js';
//import { createRoot } from 'react-dom/client';
//TODO: Import the Provider component from 'react-redux' here!


const root = ReactDOM.render(
  <Provider store={store}>
    <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
  </Provider>,
  document.getElementById('app')
);
//can pass in 3rd arg

// root.render(
//   <Provider store={store}>
//     <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
//   </Provider>
// );


//TODO: Use the Provider component to make your store available to
//  the rest of your app.


