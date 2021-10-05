import { TOKEN } from "../../util/settings/config";
import {
    SIGN_IN_ACTION,
    SET_UNREGIST_COURSE_USERLIST,
    GET_INFO_USER_ACTION,
    USER_EDIT,
    ADD_USER_MODAL,
    EDIT_USER_MODAL,
    SET_REGIST_COURSE_USERLIST,
    SEARCH_USER,
} from "../Actions/Types/UserType";

const initialState = {
    userEdit: {},
    userLogin: {},
    listUser: [],
    addModal: false,
    editModal: false,
    unRegistCourseUserList: [],
    registCourseUserList: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_ACTION:
            state.userLogin = action.payload;
            localStorage.setItem(TOKEN, action.payload.accessToken);
            return {...state };

        case GET_INFO_USER_ACTION:
            state.listUser = action.payload;
            return {...state };

        case SEARCH_USER:
            state.listUser = action.payload;
            return {...state };

        case USER_EDIT:
            state.userEdit = action.payload;
            console.log(state.userEdit);
            return {...state };
        case SET_UNREGIST_COURSE_USERLIST:
            state.unRegistCourseUserList = action.payload;
            return {...state };
        case SET_REGIST_COURSE_USERLIST:
            state.registCourseUserList = action.payload;
            return {...state };
        case ADD_USER_MODAL:
            state.addModal = action.payload;
            return {...state };
        case EDIT_USER_MODAL:
            state.editModal = action.payload;
            return {...state };

        default:
            return {...state };
    }
};
export default reducer;