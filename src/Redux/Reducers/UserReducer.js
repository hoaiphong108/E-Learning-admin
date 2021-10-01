import { TOKEN } from "../../util/settings/config";
import {
    GET_INFO_USER_ACTION,
    SIGN_IN_ACTION,
    USER_EDIT,
} from "../Actions/Types/UserType";

const initialState = {
    userEdit: {},
    userLogin: {},
    listUser: [],

    open: true,
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

        case USER_EDIT:
            state.userEdit = action.payload;
            console.log(state.userEdit);
            return {...state };
        case "SET_OPEN":
            state.open = action.payload;
            console.log(state.open);
            return {...state };

        default:
            return {...state };
    }
};
export default reducer;