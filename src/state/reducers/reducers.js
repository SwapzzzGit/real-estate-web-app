import { LOGIN_SUCCESS, LOGOUT } from "../Actions/actions";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  isAuthenticated: JSON.parse(localStorage.getItem("user")) !== null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
