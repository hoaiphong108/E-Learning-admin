import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

import {
  fetchUnRegistCourseUserList,
  fetchRegistedCourseUserList,
  fecthUnRegistCourseList,
  fecthRegistedCourseList,
  fecthUnApprovalCourseList,
  fetchRegistCourseUserList,
} from "../../Redux/Actions/UserAction";
import { createAction } from "../../Redux/Actions";
import {
  GET_REGISTED_ACCOUNT_NAME,
  GET_REGISTED_COURSE_CODE_NAME,
} from "../../Redux/Actions/Types/UserType";
import "./style.css";
import {
  registCourseAction,
  unRegistCourseAction,
} from "../../Redux/Actions/CourseAction";

const REGISTER_CONTENT = {
  USER_IN_TO_COURSE: "userToCourse",
  COURSE_BY_USER: "courseByUser",
  TEST_UI: "test-ui",
};

export default function Register() {
  const dispatch = useDispatch();
  const registCousre = (taiKhoan, maKhoaHoc) => {
    dispatch(registCourseAction(taiKhoan, maKhoaHoc));
  };
  const unRegistCourse = (taiKhoan, maKhoaHoc) => {
    dispatch(unRegistCourseAction(taiKhoan, maKhoaHoc));
  };

  const unRegistCourseUserList = useSelector((state) => {
    return state.user.unRegistCourseUserList;
  });

  const registedCourseUserList = useSelector((state) => {
    return state.user.registedCourseUserList;
  });

  const unRegistCourseList = useSelector((state) => {
    return state.user.unRegistCourseList;
  });

  const registedCourseList = useSelector((state) => {
    return state.user.registedCourseList;
  });

  const unApprovalCourseList = useSelector((state) => {
    return state.user.unApprovalCourseList;
  });

  const userList = useSelector((state) => {
    return state.user.listUser;
  });

  const registedCourseCodeName = useSelector((state) => {
    return state.user.registedCourseCodeName;
  });

  const registedCourseName = useSelector((state) => {
    return state.user.registedCourseName;
  });

  const registedAccountName = useSelector((state) => {
    return state.user.registedAccountName;
  });

  const courseList = useSelector((state) => {
    return state.course.courseList;
  });

  const [regiterContent, setRegisterContent] = useState("userToCourse");
  const [courseCodeName, setCourseCodeName] = useState(registedCourseCodeName); //test: "ITEC2104"
  const [accountName, setAccountName] = useState(registedAccountName); //text:"khai"
  const [courseName, setCourseName] = useState(registedCourseName); //test:"Ki???m Th??? Ph???n M???m ABCD"

  useEffect(() => {
    dispatch(fetchRegistedCourseUserList(courseCodeName));
    dispatch(fecthUnRegistCourseList(accountName));
    dispatch(fecthRegistedCourseList(accountName));
    dispatch(fecthUnApprovalCourseList(accountName));
  }, [dispatch, courseCodeName, accountName]);

  // -----SETTING C???A C??C DANH S??CH N???M NGANG-----
  const subjectListSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    variableWidth: true,
  };

  const userListSliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 4,
    initialSlide: 0,
    arrows: false,
    variableWidth: true,
  };
  // -----SETTING C???A C??C DANH S??CH N???M NGANG-----

  //-----C??C H??M RENDER D??? LI???U-----
  const renderSubjectList = () => {
    const _courseList = [...courseList];
    return _courseList.map((item, index) => {
      const { tenKhoaHoc, maKhoaHoc } = item;
      return (
        <div
          onClick={() => {
            setCourseCodeName(maKhoaHoc);
            setCourseName(tenKhoaHoc);
            dispatch(createAction(GET_REGISTED_COURSE_CODE_NAME, maKhoaHoc));
          }}
          className="mx-3 py-3  border-t-2 border-b-2 border-gray-600 cursor-pointer"
          key={index}
        >
          {tenKhoaHoc}
        </div>
      );
    });
  };

  const renderEmptyList = () => {
    return (
      <tr>
        <td className="px-3 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">
            <div className="ml-1">
              <div className="text-sm leading-5 font-medium text-gray-500">
                <div>Ch??a c?? kh??a h???c n??o</div>
              </div>
            </div>
          </div>
        </td>
        <td
          className="px-2 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm 
                            leading-5 font-medium"
        >
          <div className="p-1 text-transparent">......................</div>
        </td>
      </tr>
    );
  };

  const renderRegistUserByCourseList = (list, isRegisted) => {
    if (list.length > 0) {
      return list.map((item, index) => {
        const { taiKhoan, hoTen } = item;
        return (
          <tr key={index}>
            <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex items-center">
                <div className="ml-1">
                  <div className="text-sm leading-5 font-medium text-gray-500">
                    H??? t??n: {hoTen}
                  </div>
                  <div className="text-sm leading-5 text-gray-500">
                    T??i kho???n: {taiKhoan}
                  </div>
                </div>
              </div>
            </td>
            <td
              className="px-2 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm 
                            leading-5 font-medium"
            >
              {isRegisted ? (
                <>
                  <button
                    className="border-2 rounded p-1 border-green-500 hover:border-green-700 text-green-500 hover:text-green-700"
                    onClick={() => {
                      registCousre(taiKhoan, courseCodeName);
                    }}
                  >
                    Ghi danh
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="border-2 rounded p-1 border-red-500 hover:border-red-700 text-red-500 hover:text-red-700"
                    onClick={() => {
                      unRegistCourse(taiKhoan, courseCodeName);
                    }}
                  >
                    H???y ghi danh
                  </button>
                </>
              )}
            </td>
          </tr>
        );
      });
    } else {
      return renderEmptyList();
    }
  };

  const renderRegistCourseByUserList = (list, isRegisted) => {
    if (list.length > 0) {
      return list.map((item, index) => {
        const { tenKhoaHoc, maKhoaHoc } = item;
        return (
          <tr key={index}>
            <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex items-center">
                <div className="ml-1">
                  <div className="text-sm leading-5 font-medium text-gray-500">
                    <div> T??n kh??a: </div>
                    <div>
                      {tenKhoaHoc.slice(0, 25)}
                      {tenKhoaHoc.lengh > 25 ? <span>...</span> : <></>}
                    </div>
                  </div>
                  <div className="text-sm leading-5 text-gray-500">
                    M??: {maKhoaHoc}
                  </div>
                </div>
              </div>
            </td>
            <td
              className="px-2 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm 
                leading-5 font-medium"
            >
              {isRegisted ? (
                <>
                  <button
                    className="border-2 rounded p-1 border-green-500 hover:border-green-700 text-green-500 hover:text-green-700"
                    onClick={() => {
                      registCousre(accountName, maKhoaHoc);
                    }}
                  >
                    Ghi danh
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="border-2 rounded p-1 border-red-500 hover:border-red-700 text-red-500 hover:text-red-700"
                    onClick={() => {
                      unRegistCourse(accountName, maKhoaHoc);
                    }}
                  >
                    H???y ghi danh
                  </button>
                </>
              )}
            </td>
          </tr>
        );
      });
    } else {
      return renderEmptyList();
    }
  };

  const renderUnApprovalCourseList = () => {
    const list = [...unApprovalCourseList];
    if (list.length > 0) {
      return list.map((item, index) => {
        const { tenKhoaHoc, maKhoaHoc } = item;
        return (
          <tr key={index}>
            <td className="px-3 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex items-center">
                <div className="ml-1">
                  <div className="text-sm leading-5 font-medium text-gray-500">
                    <div>T??n kh??a: </div>
                    <div>{tenKhoaHoc.slice(0, 25)}...</div>
                    <div>M??: {maKhoaHoc}</div>
                  </div>
                </div>
              </div>
            </td>
            <td ></td>
          </tr>
        );
      });
    } else {
      return renderEmptyList();
    }
  };

  const renderUserList = () => {
    const list = [...userList];
    // console.log("renderUserList run ");
    return list.map((item, index) => {
      const { hoTen, taiKhoan } = item;
      return (
        <div
          onClick={() => {
            // dispatch(createAction(GET_REGISTED_ACCOUNT_NAME, taiKhoan));
            setAccountName(taiKhoan);
            dispatch(createAction(GET_REGISTED_ACCOUNT_NAME, taiKhoan));
          }}
          key={index}
          className="cursor-pointer"
        >
          {hoTen}
        </div>
      );
    });
  };

  //-----C??C H??M RENDER D??? LI???U-----

  //-----C??C H??M CHUY???N ?????I N???I DUNG ???????C HI???N TH??? KHI CLICK-----
  const setActiveRegisterItem = (uid) => {
    switch (uid) {
      case REGISTER_CONTENT.USER_IN_TO_COURSE:
        setRegisterContent(uid);
        break;
      case REGISTER_CONTENT.COURSE_BY_USER:
        setRegisterContent(uid);
        break;
      default:
        break;
    }
  };
  //-----C??C H??M CHUY???N ?????I N???I DUNG ???????C HI???N TH??? KHI CLICK-----

  const getRegiterContent = () => {
    const _unRegistCourseUserList = [...unRegistCourseUserList];
    const _registedCourseUserList = [...registedCourseUserList];
    const _unRegistCourseList = [...unRegistCourseList];
    const _registedCourseList = [...registedCourseList];
    switch (regiterContent) {
      case REGISTER_CONTENT.USER_IN_TO_COURSE:
        return (
          <main>
            <div>
              <p className="p-3 font-bold">Danh s??ch kh??a h???c</p>

              {/* -----Subject list slider start----- */}
              <div className="max-w-6xl">
                <Slider {...subjectListSliderSettings}>
                  {renderSubjectList()}
                </Slider>
              </div>
              {/* -----Subject list slider end----- */}

              <div className="flex justify-evenly mt-2">
                {/* -----Ch??a ghi danh list container start----- */}
                <div>
                  <p className="mb-1 ml-5 font-bold">Ch??a ghi danh</p>
                  <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-6">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="px-6 h-16 w-96 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              {courseName}
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {renderRegistUserByCourseList(
                            _unRegistCourseUserList,
                            true
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* -----Ch??a ghi danh list container end----- */}

                {/* -----???? ghi danh list container start----- */}
                <div>
                  <p className="mb-1 ml-5 font-bold">???? ghi danh</p>
                  <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-6">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="px-6  h-16 w-96 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              {courseName}
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {renderRegistUserByCourseList(
                            _registedCourseUserList,
                            false
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* -----???? ghi danh list container end----- */}
              </div>
            </div>
          </main>
        );
      case REGISTER_CONTENT.COURSE_BY_USER:
        return (
          <main>
            {/* -----User list slider start----- */}
            <div>
              <p className="p-3 font-bold">Danh s??ch h???c vi??n</p>
              <div className="max-w-6xl px-4 border-t-2 border-b-2 border-gray-500">
                <Slider {...userListSliderSettings}>{renderUserList()}</Slider>
              </div>
            </div>
            {/* -----User list slider end----- */}

            <div className="flex justify-evenly mt-5">
              {/* -----Ch??a ghi danh course container start----- */}
              <div>
                <div className="-my-2 py-4 py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Kh??a h???c ch??a ghi danh
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {renderRegistCourseByUserList(
                          _unRegistCourseList,
                          true
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* -----Ch??a ghi danh course container end----- */}

              {/* -----???? ghi danh course container start----- */}
              <div>
                <div className="-my-2 py-4 py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Kh??a h???c ???? ghi danh
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {renderRegistCourseByUserList(
                          _registedCourseList,
                          false
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* -----???? ghi danh course container end----- */}

              {/* -----Danh s??ch kh??a ch??? x??t duy???t container start----- */}
              <div>
                <div className="-my-2 py-4 py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Kh??a h???c ch??? x??t duy???t
                          </th>
                          <th className="border-b border-gray-200 bg-gray-50" />
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {renderUnApprovalCourseList()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* -----Danh s??ch kh??a ch??? x??t duy???t container end----- */}
            </div>
          </main>
        );
      default:
        return;
    }
  };

  return (
    <div>
      <>
        <h3 className="text-gray-700 text-3xl font-medium">Ghi danh</h3>

        {/* -----Switch ng?????i d??ng/ kh??a h???c start----- */}
        <div className="mt-3">
          <div className="flex -mx-6 justify-evenly">
            {/* -----Ng?????i d??ng button start----- */}
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <div className="flex items-center px-2 py-1 shadow-sm rounded-md bg-white">
                <button
                  onClick={() => setActiveRegisterItem("userToCourse")}
                  className="text-gray-500 px-6 py-3 w-full focus:outline-none"
                >
                  Ng?????i d??ng v??o kh??a h???c
                </button>
              </div>
            </div>
            {/* -----Ng?????i d??ng button end----- */}

            {/* -----Kh??a h???c button start----- */}
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
              <div className="flex items-center px-2 py-1 shadow-sm rounded-md bg-white">
                <button
                  onClick={() => setActiveRegisterItem("courseByUser")}
                  className="text-gray-500 px-6 py-3 w-full focus:outline-none"
                >
                  Kh??a h???c cho ng?????i d??ng
                </button>
              </div>
            </div>
            {/* -----Kh??a h???c button end----- */}
          </div>
        </div>
        {/* -----Switch ng?????i d??ng/ kh??a h???c end----- */}
        <div className="mt-8">{getRegiterContent()}</div>
      </>
    </div>
  );
}
