import { createAction } from ".";
import { userService } from "../../Services/UserService";
import {
    ADD_USER_ACTION,
    GET_INFO_USER_ACTION,
    SIGN_IN_ACTION,
} from "./Types/UserType";

export const signInAction = (thongTinDangNhap, callBack) => {
    return async(dispatch) => {
        try {
            const result = await userService.signIn(thongTinDangNhap);
            dispatch(createAction(SIGN_IN_ACTION, result.data));

            callBack();
        } catch (err) {
            alert(err.response.data);
        }
    };
};
export const getInfoUserAction = () => {
    return async(dispatch) => {
        try {
            const result = await userService.getInfoUser();
            dispatch(createAction(GET_INFO_USER_ACTION, result.data));
        } catch (err) {
            console.log(err.response.data);
        }
    };
};
export const addUserAction = (thongTinNguoiDung) => {
    return async(dispatch) => {
        try {
            const result = await userService.addUser(thongTinNguoiDung);
            alert("Tạo tài khoản thành công");
            dispatch(createAction(ADD_USER_ACTION, result.data));
        } catch (err) {
            console.log(err.response.data);
        }
    };
};
export const deleteUserAction = (taiKhoan) => {
    return async(dispatch) => {
        try {
            const result = await userService.deleteUser(taiKhoan);
            alert("Xoa thanh cong");
            dispatch(getInfoUserAction);
        } catch (err) {
            console.log(err.response.data);
        }
    };
};
export const updateUserAction = (thongTinNguoiDung) => {
    return async(dispatch) => {
        try {
            const result = await userService.updateUser(thongTinNguoiDung);
            alert("update thành công");
        } catch (err) {
            console.log(err.response.data);
        }
    };
};
export const findUserByNameAction = (tuKhoa) => {
    return async(dispatch) => {
        try {
            const result = await userService.findUserByName(tuKhoa);
        } catch (err) {
            console.log(err.response.data);
        }
    };
};