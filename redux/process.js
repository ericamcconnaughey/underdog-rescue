import * as ActionTypes from './ActionTypes';

export const process = (state = { isLoading: true,
                                     errMess: null,
                                     process: []}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_PROCESS:
            return {...state, isLoading: false, errMess: null, process: action.payload};

        case ActionTypes.PROCESS_LOADING:
            return {...state, isLoading: true, errMess: null, process: []}

        case ActionTypes.PROCESS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};