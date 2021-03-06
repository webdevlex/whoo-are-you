/* eslint-disable */
import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg: msg,
      alertType: alertType,
      id: id,
    },
  });
};

export const clearAlerts = () => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
  });
};
