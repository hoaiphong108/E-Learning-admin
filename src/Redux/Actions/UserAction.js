import { createAction } from ".";
import { userService } from "../../Services/UserService";

import {
    SIGN_IN_ACTION,
    SET_UNREGIST_COURSE_USERLIST,
    ADD_USER_ACTION,
    GET_INFO_USER_ACTION,
    SET_REGIST_COURSE_USERLIST,
} from "./Types/UserType";

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

export const fetchUnRegistCourseUserList = (courseCodeName) => {
    const requestData = { maKhoaHoc: courseCodeName };
    return async(dispatch) => {
        try {
            const result = await userService.unRegistCourseUserList(requestData);
            dispatch(createAction(SET_UNREGIST_COURSE_USERLIST, result.data));
        } catch (error) {
            console.log(error);
        }
    };
};
export const fetchRegistCourseUserList = (code) => {
    const requestData = { maKhoaHoc: code };
    return async(dispatch) => {
        try {
            const result = await userService.registCourseUserList(requestData);
            dispatch(createAction(SET_REGIST_COURSE_USERLIST, result.data));
        } catch (err) {
            console.log(err);
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