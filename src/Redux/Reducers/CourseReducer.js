import { actionCourseTypes } from "../Actions/Types/CourseType";

const initialState = {
  courseList: [],
  courseUpdated: {},
  showEditCourseModal: false,
  showCreateCourseModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCourseTypes.SET_COURSE_LIST ||
      actionCourseTypes.ADD_COURSE ||
      actionCourseTypes.DELETE_COURSE ||
      actionCourseTypes.UPDATE_COURSE:
      state.courseList = action.payload;
      return { ...state };

      case actionCourseTypes.SEARCH_COURSE:
      state.courseList = action.payload;

      return { ...state };

    case actionCourseTypes.UPDATE_COURSE:
      state.courseUpdated = action.payloadss;
      return { ...state };

    case actionCourseTypes.SHOW_CREATE_COURSE_MODAL:
      state.showCreateCourseModal = action.payload;
      return { ...state };

    case actionCourseTypes.SHOW_EDIT_COURSE_MODAL:
      state.showEditCourseModal = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default reducer;
