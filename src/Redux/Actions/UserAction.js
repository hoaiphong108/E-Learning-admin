import { createAction } from ".";
import { userService } from "../../Services/UserService";

import {
  SIGN_IN_ACTION,
  SET_UNREGIST_COURSE_USERLIST,
  SET_REGISTED_COURSE_USERLIST,
  SET_COURSE_LIST_USER_UNREGIST,
  SET_COURSE_LIST_USER_REGISTED,
  SET_COURSE_LIST_UNAPPROVAL,
  ADD_USER_ACTION,
  GET_INFO_USER_ACTION,
  SEARCH_USER,
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

export const fetchRegistedCourseUserList = (courseCodeName) => {
  const requestData = { maKhoaHoc: courseCodeName };
  return async (dispatch) => {
    try {
      const result = await userService.registedCourseUserList(requestData);
      dispatch(createAction(SET_REGISTED_COURSE_USERLIST, result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fecthUnRegistCourseList = (accountName) => {
  const requestData = { TaiKhoan: accountName };
  return async (dispatch) => {
    try {
      const result = await userService.unRegistCourseList(requestData);
      dispatch(createAction(SET_COURSE_LIST_USER_UNREGIST, result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fecthRegistedCourseList = (accountName) => {
  const requestData = { TaiKhoan: accountName };
  return async (dispatch) => {
    try {
      const result = await userService.registedCourseList(requestData);
      dispatch(createAction(SET_COURSE_LIST_USER_REGISTED, result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fecthUnApprovalCourseList = (accountName) => {
  const requestData = { TaiKhoan: accountName };
  return async (dispatch) => {
    try {
      const result = await userService.unApprovalCourseList(requestData);
      dispatch(createAction(SET_COURSE_LIST_UNAPPROVAL, result.data));
      // console.log("fecthUnApprovalCourseList", result.data);
    } catch (error) {
      console.log(error);
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
            dispatch(createAction(SEARCH_USER, result.data));
        } catch (err) {
            console.log(err.response.data);
        }
    };
};