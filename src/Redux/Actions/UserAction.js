import { createAction } from ".";
import { userService } from "../../Services/UserService";
import { SIGN_IN_ACTION } from "./Types/UserType";

export const signInAction = (thongTinDangNhap, callBack) => {
    return async(dispatch) => {
        try {
            const result = await userService.signIn(thongTinDangNhap);
            dispatch(createAction(SIGN_IN_ACTION, result.data));

            callBack();
        } catch (err) {
            alert(err.content);
        }
    };
};