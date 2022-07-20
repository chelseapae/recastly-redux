import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //console.log(Redux.getState());
  var initialState = [];

  if (state === undefined) {
    state = initialState;
  }

  return state;
};

export default currentVideoReducer;
