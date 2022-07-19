var changeVideoList = (videos) => {
  //TODO:  Return some action object to change the list of videos in VideoList.

  return {
    type: 'UPDATE_VIDEO_LIST',
    payload: videos
  };
};

export default changeVideoList;
