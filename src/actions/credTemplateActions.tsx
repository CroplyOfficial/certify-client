import axios from "axios";
import {
  GET_TEMPLATES_FAIL,
  GET_TEMPLATES_REQUEST,
  GET_TEMPLATES_SUCCESS,
  NEW_TEMPLATE_FAIL,
  NEW_TEMPLATE_REQUEST,
  NEW_TEMPLATE_SUCCESS,
} from "../constants/credentialTemplateConstants";
import { ICredentialTemplate } from '../interfaces/credTemplate.interface'

export const getCredentialTemplates =
  () => async (dispatch: any, getState: () => any) => {
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

export const newCredentialTemplate =
  (credentialTemplate: ICredentialTemplate) => async (dispatch: any, getState: () => any) => {
    try {
      dispatch({
        type: NEW_TEMPLATE_REQUEST,
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

      const { data } = await axios.post("/api/cred-templates", credentialTemplate, config);
      dispatch({
        type: NEW_TEMPLATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_TEMPLATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
