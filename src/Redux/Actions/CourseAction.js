import { courseService } from "../../Services/CourseService";
// import { GET_COURSE_LIST } from "./Types/CourseType";
import { isEmpty } from "lodash";

import { createAction } from ".";
import { actionCourseTypes } from "./Types/CourseType";
import {
    fecthRegistedCourseList,
    fecthUnRegistCourseList,
    fetchRegistedCourseUserList,
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
    return async(dispatch) => {
        try {
            const result = await courseService.getCourseList(dataRequest);

            if (isEmpty(dataRequest)) {
                dispatch(createAction(actionCourseTypes.SEARCH_COURSE_NO_RESULT, []));

                return;
            }

            dispatch(createAction(actionCourseTypes.SEARCH_COURSE, result.data));
        } catch (err) {
            console.log("error", err);
            dispatch(createAction(actionCourseTypes.SEARCH_COURSE_NO_RESULT, []));
        }
    };
};

export const addCourseToListAction = (dataRequest) => {
    return async(dispatch) => {
        try {
            const result = await courseService.addCourse(dataRequest);
            //không cần dispatch lên
            alert("Tạo khóa học thành công");
            dispatch(fetchCourseList());
        } catch (err) {
            alert(err);
        }
    };
};

export const deleteCourseAction = (maKhoaHoc) => {
    return async(dispatch) => {
        try {
            const result = await courseService.deleteCourse(maKhoaHoc);
            // dispatch(actionCourseTypes.DELETE_COURSE, result.data);

            alert("Xóa thành công");
            dispatch(fetchCourseList());
        } catch (err) {
            alert(err.response.data);
        }
    };
};

export const updateCourseToListAction = (dataRequest) => {
    return async(dispatch) => {
        try {
            const result = await courseService.updateCourse(dataRequest);
            alert("Chỉnh sửa khóa học thành công");
            dispatch(fetchCourseList());
        } catch (err) {
            console.log(err);
        }
    };
};

export const registCourseAction = (user, codeCourse) => {
    const dataRequest = { taiKhoan: user, maKhoaHoc: codeCourse };
    return async(dispatch, getState) => {
        try {
            const result = await courseService.registCourse(dataRequest);
            alert("Ghi danh thành công");
            const codeCourseName = getState().user.registedCourseCodeName;
            const registedAccountName = getState().user.registedAccountName;
            dispatch(fecthRegistedCourseList(registedAccountName));
            dispatch(fecthUnRegistCourseList(registedAccountName));
            dispatch(fetchUnRegistCourseUserList(codeCourseName));
            dispatch(fetchRegistedCourseUserList(codeCourseName));
        } catch (err) {
            console.log(err);
        }
    };
};
export const unRegistCourseAction = (user, codeCourse) => {
    const dataRequest = { taiKhoan: user, maKhoaHoc: codeCourse };
    return async(dispatch, getState) => {
        try {
            const result = await courseService.unRegistCourse(dataRequest);
            alert("Hủy ghi danh thành công");
            const codeCourseName = getState().user.registedCourseCodeName;
            const registedAccountName = getState().user.registedAccountName;
            dispatch(fecthRegistedCourseList(registedAccountName));
            dispatch(fecthUnRegistCourseList(registedAccountName));
            dispatch(fetchUnRegistCourseUserList(codeCourseName));
            dispatch(fetchRegistedCourseUserList(codeCourseName));
        } catch (err) {
            console.log(err);
        }
    };
};