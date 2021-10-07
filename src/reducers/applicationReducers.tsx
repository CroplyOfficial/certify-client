import {
  GET_APPS_REQUEST,
  GET_APPS_SUCCESS,
  GET_APPS_FAIL,
} from "../constants/applicationConstants";

export const getApplicationsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_APPS_REQUEST:
      return { loading: true };
    case GET_APPS_SUCCESS:
      return { loading: false, myApplications: action.payload };
    case GET_APPS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
