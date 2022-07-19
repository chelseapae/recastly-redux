var changeVideo = (video) => {
  return {
    type: 'CHANGE_CURRENT_VIDEO',
    payload: video
  };
};

export default changeVideo;
