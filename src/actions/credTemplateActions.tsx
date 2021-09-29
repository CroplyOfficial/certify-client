import axios from "axios";
import {
  GET_TEMPLATES_FAIL,
  GET_TEMPLATES_REQUEST,
  GET_TEMPLATES_SUCCESS,
} from "../constants/credentialTemplateConstants";

export const register = () => async (dispatch: any, getState: () => any) => {
  try {
    dispatch({
      type: GET_TEMPLATES_REQUEST,
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

    const { data } = await axios.get("/api/cred-templates", config);
    dispatch({
      type: GET_TEMPLATES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEMPLATES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
