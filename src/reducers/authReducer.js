import { AuthTypes, TOKEN_KEY } from "../constants";

const initialState = null;

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.AUTHORIZE_USER_SUCCESS:
      console.log(action.payload.user)
      return action.payload.user;
    case AuthTypes.AUTHORIZE_USER_FAILURE:
      return null;
    case AuthTypes.LOGOUT_USER:
      localStorage.removeItem(TOKEN_KEY);
      return null;
    default:
      break;
  }
  return state;
};

export default auth;
