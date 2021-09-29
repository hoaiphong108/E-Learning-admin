import { actionCourseTypes } from "../Actions/Types/CourseType";

const initialState = {
  courseList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCourseTypes.SET_COURSE_LIST:
      state.courseList = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default reducer;
