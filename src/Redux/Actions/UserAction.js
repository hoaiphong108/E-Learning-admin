import { createAction } from ".";
import { userService } from "../../Services/UserService";
import { SIGN_IN_ACTION, SET_UNREGIST_COURSE_USERLIST } from "./Types/UserType";

// get

export const signInAction = (thongTinDangNhap, callBack) => {
  return async (dispatch) => {
    try {
      const result = await userService.signIn(thongTinDangNhap);
      dispatch(createAction(SIGN_IN_ACTION, result.data));

      callBack();
    } catch (err) {
      alert(err.content);
    }
  };
};

export const getUnRegistCourseUserList = (courseCodeName) => {
  const requestData = { maKhoaHoc: courseCodeName };
  return async (dispatch) => {
    try {
      const result = await userService.unRegistCourseUserList(requestData);
      dispatch(createAction(SET_UNREGIST_COURSE_USERLIST, result.data));
    } catch (error) {
      console.log(error);
    }
  };

  // await userService
  //   .unRegistCourseUserList(requestData)
  //   .then((result) => {
  //     console.log("user action getUnRegistCourseUserList", result.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};
