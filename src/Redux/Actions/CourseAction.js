import { courseService } from "../../Services/CourseService";
import { GET_COURSE_LIST } from "./Types/CourseType";
import { createAction } from "./index";

export const fetchCourseList = () => {
  return async (dispatch) => {
    try {
      const result = await courseService.getCourseList();
      await dispatch(createAction(GET_COURSE_LIST, result.data));
    } catch (error) {
      console.log(error);
    }
  };
};
