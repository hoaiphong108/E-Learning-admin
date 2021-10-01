import { createAction } from ".";
import { courseService } from "../../Services/CourseService";
import { actionCourseTypes } from "./Types/CourseType";

export const fetchCourseList = () => {
  return async (dispatch) => {
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
  return async (dispatch) => {
    try {
      console.log("showCreateModal isOpen", isOpen);
      dispatch(createAction(actionCourseTypes.SHOW_CREATE_COURSE_MODAL, isOpen));
    } catch (err) {
      console.log(err);
    }
  };
};