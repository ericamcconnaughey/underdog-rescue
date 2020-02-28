import * as ActionTypes from './ActionTypes';

export const pets = (state = { isLoading: true,
                                     errMess: null,
                                     pets: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PETS:
            return {...state, isLoading: false, errMess: null, pets: action.payload};
            
        case ActionTypes.PETS_LOADING:
            return {...state, isLoading: true, errMess: null, pets: []}

        case ActionTypes.PETS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};