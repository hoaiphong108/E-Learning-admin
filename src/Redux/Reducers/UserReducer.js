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
    openAddModal: true,
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

        case "SET_OPEN":
            state.open = action.payload;
            console.log(state.open);
            return {...state };

        default:
            return {...state };
        case SET_UNREGIST_COURSE_USERLIST:
            state.unRegistCourseUserList = action.payload;
            return {...state };
    }
};
export default reducer;