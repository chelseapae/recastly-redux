import Redux from 'redux';

var currentVideoReducer = (prevState, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //console.log(Redux.getState());

  if (prevState === undefined) {
    prevState = { videos: [], video: {} };
  }

  if (action.type === 'CHANGE_VIDEO') {
    return {
      ...prevState,
      video: action.video
    };
  }

  return prevState;
};

export default currentVideoReducer;
