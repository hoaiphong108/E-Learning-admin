import { courseService } from "../../Services/CourseService";
// import { GET_COURSE_LIST } from "./Types/CourseType";

import { createAction } from ".";
import { actionCourseTypes } from "./Types/CourseType";
import {
    fetchRegistCourseUserList,
    fetchUnRegistCourseUserList,
} from "./UserAction";

export const fetchCourseList = () => {
    return async(dispatch) => {
        try {
            const result = await courseService.getCourseList();
            await dispatch(
                createAction(actionCourseTypes.SET_COURSE_LIST, result.data)
            );
        } catch (err) {
            console.log(err);
        }
    };
};

export const showCreateModal = (isOpen) => {
    return async(dispatch) => {
        try {
            dispatch(
                createAction(actionCourseTypes.SHOW_CREATE_COURSE_MODAL, isOpen)
            );
        } catch (err) {
            console.log(err);
        }
    };
};

export const showEditModal = (isOpen) => {
    return async(dispatch) => {
        try {
            dispatch(createAction(actionCourseTypes.SHOW_EDIT_COURSE_MODAL, isOpen));
        } catch (err) {
            console.log(err);
        }
    };
};

export const searchCourse = (dataRequest) => {
    return async (dispatch) => {
      try {
        const result = await courseService.getCourseList(dataRequest);
  
        dispatch(
          createAction(actionCourseTypes.SEARCH_COURSE, result.data)
        );  
      } catch (err) {
          console.log("error", err);
      }
    };
  };
  

export const addCourseToList = (dataRequest) => {
    return async(dispatch) => {
        try {
            const result = await courseService.addCourse(dataRequest);
            dispatch(actionCourseTypes.ADD_COURSE, result.data);
            alert("Tạo khóa học thành công");
        } catch (err) {
            console.log(err);
        }
    };
};

export const deleteCourse = (dataRequest) => {
    return async(dispatch) => {
        try {
            const result = await courseService.deleteCourse(dataRequest);
            dispatch(actionCourseTypes.DELETE_COURSE, result.data);
            alert("Xóa thành công");
        } catch (err) {
            console.log(err);
        }
    };
};

export const updateCourseToList = (dataRequest) => {
    return async(dispatch) => {
        try {
            const result = await courseService.updateCourse(dataRequest);
            dispatch(actionCourseTypes.UPDATE_COURSE, result.data);
            alert("Chỉnh sửa khóa học thành công");
        } catch (err) {
            console.log(err);
        }
    };
};

export const registCourseAction = (user, codeCourse) => {
    const dataRequest = { taiKhoan: user, maKhoaHoc: codeCourse };
    return async(dispatch) => {
        try {
            const result = await courseService.registCourse(dataRequest);
            alert("Ghi danh thành công");
            dispatch(fetchUnRegistCourseUserList("ITEC2104"));
            dispatch(fetchRegistCourseUserList("ITEC2104"));
        } catch (err) {
            console.log(err);
        }
    };
};
export const unRegistCourseAction = (user, codeCourse) => {
    const dataRequest = { taiKhoan: user, maKhoaHoc: codeCourse };
    return async(dispatch) => {
        try {
            const result = await courseService.unRegistCourse(dataRequest);
            alert("Hủy ghi danh thành công");
            dispatch(fetchUnRegistCourseUserList("ITEC2104"));
            dispatch(fetchRegistCourseUserList("ITEC2104"));
        } catch (err) {
            console.log(err);
        }
    };
};