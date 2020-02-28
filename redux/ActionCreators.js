import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchPets = () => dispatch => {

  dispatch(petsLoading());

  return fetch(baseUrl + 'pets')
      .then(response => {
              if (response.ok) {
              return response;
              } else {
                  const error = new Error(`Error ${response.status}: ${response.statusText}`);
                  error.response = response;
              throw error;
              }
          },
          error => {
              const errMess = new Error(error.message);
              throw errMess;
          })
      .then(response => response.json())
      .then(pets => dispatch(addPets(pets)))
      .catch(error => dispatch(petsFailed(error.message)));
};

export const petsLoading = () => ({
  type: ActionTypes.PETS_LOADING
});

export const petsFailed = errMess => ({
  type: ActionTypes.PETS_FAILED,
  payload: errMess
});

export const addPets = pets => ({
  type: ActionTypes.ADD_PETS,
  payload: pets
});


export const fetchProcess = () => dispatch => {

  dispatch(processLoading());

  return fetch(baseUrl + 'process')
      .then(response => {
              if (response.ok) {
              return response;
              } else {
                  const error = new Error(`Error ${response.status}: ${response.statusText}`);
                  error.response = response;
              throw error;
              }
          },
          error => {
              const errMess = new Error(error.message);
              throw errMess;
          })
      .then(response => response.json())
      .then(process => dispatch(addProcess(process)))
      .catch(error => dispatch(processFailed(error.message)));
};

export const processLoading = () => ({
  type: ActionTypes.PROCESS_LOADING
});

export const processFailed = errMess => ({
  type: ActionTypes.PROCESS_FAILED,
  payload: errMess
});

export const addProcess = process => ({
  type: ActionTypes.ADD_PROCESS,
  payload: process
});

export const postFavorite = petId => dispatch => {
  setTimeout(() => {
      dispatch(addFavorite(petId));
  }, 2000);
};

export const addFavorite = petId => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: petId
});