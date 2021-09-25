import { TOKEN } from "../../util/settings/config";
import { SIGN_IN_ACTION } from "../Actions/Types/UserType";

const initialState = {
    userLogin: {},
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_ACTION:
            state.userLogin = action.payload;
            localStorage.setItem(TOKEN, action.payload.accessToken);
            return {...state };

        default:
            return {...state };
    }
};
export default reducer;