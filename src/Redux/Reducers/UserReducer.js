import { TOKEN } from "../../util/settings/config";
import {
  SIGN_IN_ACTION,
  SET_UNREGIST_COURSE_USERLIST,
  SET_REGISTED_COURSE_USERLIST,
  SET_COURSE_LIST_USER_UNREGIST,
  SET_COURSE_LIST_USER_REGISTED,
  SET_COURSE_LIST_UNAPPROVAL,
  GET_INFO_USER_ACTION,
  USER_EDIT,
  ADD_USER_MODAL,
  EDIT_USER_MODAL,
  SEARCH_USER,
} from "../Actions/Types/UserType";

const initialState = {
  userEdit: {},
  userLogin: {},
  listUser: [],
  addModal: false,
  editModal: false,
  unRegistCourseUserList: [],
  registedCourseUserList: [],
  unRegistCourseList: [],
  registedCourseList: [],
  unApprovalCourseList: [],
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
     case SEARCH_USER:
state.listUser = action.payload;
return {...state };

    case SET_UNREGIST_COURSE_USERLIST:
      state.unRegistCourseUserList = action.payload;
      return { ...state };

    case SET_REGISTED_COURSE_USERLIST:
      state.registedCourseUserList = action.payload;
      return { ...state };

    case SET_COURSE_LIST_USER_UNREGIST:
      state.unRegistCourseList = action.payload;
      return { ...state };

    case SET_COURSE_LIST_USER_REGISTED:
      state.registedCourseList = action.payload;
      return { ...state };

    case SET_COURSE_LIST_UNAPPROVAL:
      state.unApprovalCourseList = action.payload;
      return { ...state };

    case ADD_USER_MODAL:
      state.addModal = action.payload;
      return { ...state };

    case EDIT_USER_MODAL:
      state.editModal = action.payload;
      return { ...state };

    default:
      return { ...state };
  }

export default reducer;
