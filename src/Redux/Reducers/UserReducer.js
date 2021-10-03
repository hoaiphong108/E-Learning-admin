import { TOKEN } from "../../util/settings/config";
import {
  SIGN_IN_ACTION,
  SET_UNREGIST_COURSE_USERLIST,
  GET_INFO_USER_ACTION,
  USER_EDIT,
} from "../Actions/Types/UserType";

const initialState = {
  userEdit: {},
  userLogin: {},
  listUser: [],
  unRegistCourseUserList: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_ACTION:
      state.userLogin = action.payload;
      localStorage.setItem(TOKEN, action.payload.accessToken);
      return { ...state };

    case GET_INFO_USER_ACTION:
      state.listUser = action.payload;
      return { ...state };

    case USER_EDIT:
      state.userEdit = action.payload;
      console.log(state.userEdit);
      return { ...state };
    case SET_UNREGIST_COURSE_USERLIST:
      state.unRegistCourseUserList = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
