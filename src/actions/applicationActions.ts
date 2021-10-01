import axios from "axios";
import {
  GET_APPS_REQUEST,
  GET_APPS_SUCCESS,
  GET_APPS_FAIL,
} from "../constants/applicationConstants";

export const getMyApplications =
  () => async (dispatch: any, getState: () => any) => {
    try {
      dispatch({
        type: GET_APPS_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get("/api/applications/@me/current", config);
      dispatch({
        type: GET_APPS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_APPS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
