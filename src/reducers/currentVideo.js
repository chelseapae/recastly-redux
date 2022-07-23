import Redux from 'redux';

var currentVideoReducer = (prevState = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //console.log(Redux.getState());

  // if (prevState === undefined) {
  //   prevState = { videos: [], video: {} };
  // }
  //debugger;
  if (action.type === 'CHANGE_VIDEO' && action.video !== undefined) {
    // return Object.assign({}, prevState, {currentVideo: action.video});
    return action.video;
  }

  return prevState;
};

export default currentVideoReducer;
