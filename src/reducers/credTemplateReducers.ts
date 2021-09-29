import {
  GET_TEMPLATES_FAIL,
  GET_TEMPLATES_REQUEST,
  GET_TEMPLATES_SUCCESS,
  NEW_TEMPLATE_FAIL,
  NEW_TEMPLATE_REQUEST,
  NEW_TEMPLATE_SUCCESS,
} from "../constants/credentialTemplateConstants";

export const credentialTemplateReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_TEMPLATES_REQUEST:
      return { loading: true };
    case GET_TEMPLATES_SUCCESS:
      return { loading: false, templates: action.payload };
    case GET_TEMPLATES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newCredentialTemplateReducer = (state = {}, action: any) => {
  switch (action.type) {
    case NEW_TEMPLATE_REQUEST:
      return { loading: true };
    case NEW_TEMPLATE_SUCCESS:
      return { loading: false, newTemplate: action.payload };
    case NEW_TEMPLATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
