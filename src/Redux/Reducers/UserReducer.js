import { TOKEN } from "../../util/settings/config";
import {
  SIGN_IN_ACTION,
  SET_UNREGIST_COURSE_USERLIST,
} from "../Actions/Types/UserType";

const initialState = {
  userLogin: {},
  unRegistCourseUserList: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_ACTION:
      state.userLogin = action.payload;
      localStorage.setItem(TOKEN, action.payload.accessToken);
      return { ...state };
    case SET_UNREGIST_COURSE_USERLIST:
      state.unRegistCourseUserList = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
