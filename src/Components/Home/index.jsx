/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { useHistory } from "react-router";

import {
  fetchRegistCourseUserList,
  fetchUnRegistCourseUserList,
  getInfoUserAction,
} from "../../Redux/Actions/UserAction";
import {
  fetchCourseList,
  registCourseAction,
  unRegistCourseAction,
} from "../../Redux/Actions/CourseAction";
import "./style.css";
import Course from "../Course";
import User from "../User";
import { CODE_GROUP, TOKEN, USER_LOGIN } from "../../util/settings/config";

const MENU_CONTENT = {
  HOME: "home",
  USER: "user",
  COURSE: "course",
  REGISTER: "register",
};

const REGISTER_CONTENT = {
  USER_IN_TO_COURSE: "userToCourse",
  COURSE_BY_USER: "courseByUser",
  TEST_UI: "test-ui",
};

/**
 * Thiếu các API:
 *
 * GhiDanhKhoaHoc
 * HuyGhiDanh
 * LayDanhSachHocVienKhoaHoc ( Lấy danh sách người dùng đã ghi danh vào khóa học đó )
 */

/**
 * Xài API danh sách user đã ghi danh theo course:
 *
 * Vào getRegiterContent thay cái list input
 * ở hàm renderRegistUserByCourseList chỗ thẻ p Đã ghi danh
 *
 * Xài API ghi danh/ hủy ghi danh:
 *
 * 2 nút đó ở hàm renderRegistUserByCourseList
 */

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuContent, setMenuContent] = useState("");
  const [regiterContent, setRegisterContent] = useState("userToCourse");
  const [courseCodeName, setCourseCodeName] = useState("ITEC2104"); //test: "ITEC2104"
  const [courseName, setCourseName] = useState("Kiểm Thử Phần Mềm ABCD");
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

  // -----TESTING DATA-----
  const userTestList = [
    {
      taiKhoan: "123",
      hoTen: "123123",
      email: "123123@123",
      soDt: "123123",
      maLoaiNguoiDung: "GV",
    },
    {
      taiKhoan: "12chamlenluon",
      hoTen: "Một Hai Ba",
      email: "12chamlenluon@gmail.com",
      soDt: "0391209321",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "admin_test",
      hoTen: "seaways",
      email: "teooo@gmail.com",
      soDt: "0772189121",
      maLoaiNguoiDung: "GV",
    },
    {
      taiKhoan: "admin321312",
      hoTen: "dasdasd",
      email: "peo@gmail.com",
      soDt: "0111111111",
      maLoaiNguoiDung: "GV",
    },
    {
      taiKhoan: "adminhai",
      hoTen: "admin",
      email: "admin@email.com.vn",
      soDt: "0123456789",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "Aduyanhdeptrai1235",
      hoTen: "123",
      email: "duyanh33444333aitp@gmail.com",
      soDt: "123",
      maLoaiNguoiDung: "GV",
    },
    {
      taiKhoan: "anup",
      hoTen: "Anup Kumar",
      email: "anupkumar9344@gmail.com",
      soDt: "9973213962",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "arale",
      hoTen: "Kien Pham update ",
      email: "kien@gmail.com",
      soDt: "123",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "asd",
      hoTen: "dasdasd",
      email: "asdasdasdasdas",
      soDt: "asdasdad",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "asuka1996",
      hoTen: "Bùi Minh Quốc",
      email: "test5@test.com",
      soDt: "12345678",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "asuka1997",
      hoTen: "123a212312312",
      email: "test23@gmail.com",
      soDt: "12345678",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "asura",
      hoTen: "asdfg",
      email: "queenofdracular@gmail.com",
      soDt: "0566545255",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "Atulmanwar",
      hoTen: "Atulmanwar",
      email: "bmatul139@gmail.com",
      soDt: "+8412345698",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "bangbang1",
      hoTen: "bang",
      email: "phibang7899@gmail.com",
      soDt: "01225255555",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "banhbeo01",
      hoTen: "thaiminhhuy",
      email: "dsadase@gmail.com",
      soDt: "0543544421",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "batman",
      hoTen: "batman",
      email: "xyz@gmail.com",
      soDt: "123456789",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "bom",
      hoTen: "bommm",
      email: "bom@gmail.com",
      soDt: "",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "caochihieu",
      hoTen: "Abcxyz212345@@@",
      email: "hieucaochi25598a@gmail.com",
      soDt: "1234567890123123",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "chithanh_admin",
      hoTen: "Mentor Đặng Chí Thanh",
      email: "chithanh_admin@gmail,com",
      soDt: "0999999999",
      maLoaiNguoiDung: "GV",
    },
    {
      taiKhoan: "chithanh_admin2",
      hoTen: "13131231",
      email: "trungtd0304@gmail.com",
      soDt: "dasda",
      maLoaiNguoiDung: "HV",
    },
    {
      taiKhoan: "chithanh_admin222",
      hoTen: "c",
      email: "trungtd03043@gmail.com",
      soDt: "dasda",
      maLoaiNguoiDung: "HV",
    },
  ];

  const unRegisterCourseList = [
    {
      maKhoaHoc: "0.14967431092137828",
      biDanh: "php",
      tenKhoaHoc: "PHP",
    },
    {
      maKhoaHoc: "0.6300311755302548",
      biDanh: "khoa-hoc-react-co-ban",
      tenKhoaHoc: "Khóa học React Cơ Bản",
    },
    {
      maKhoaHoc: "0.829307948998641",
      biDanh: "vuejsabc",
      tenKhoaHoc: "VueJSabc",
    },
    {
      maKhoaHoc: "0.8993108518316555",
      biDanh: "nestjs",
      tenKhoaHoc: "NestJS",
    },
    {
      maKhoaHoc: "1001",
      biDanh: "test-them-khoa-hoc-2",
      tenKhoaHoc: "Test them khoa hoc 2",
    },
    {
      maKhoaHoc: "111",
      biDanh: "test-them-khoc-hoc",
      tenKhoaHoc: "Test them khoc hoc",
    },
    {
      maKhoaHoc: "ITEC 2112",
      biDanh: "quan-tri-he-co-so-du-lieu",
      tenKhoaHoc: "Quản trị Hệ Cơ Sở Dữ Liệu",
    },
  ];

  const regitedCourseList = [
    {
      maKhoaHoc: "15DJ111",
      tenKhoaHoc: "Learn Object Oriented PHP By Building a Complete Website",
    },
  ];

  const unApprovalCourseList = [
    {
      maKhoaHoc: "REACT910308",
      biDanh: "react-hook-2022",
      tenKhoaHoc: "React Hook 2022",
    },
    {
      maKhoaHoc: "REACT9141053",
      biDanh: "khoa-hoc-react-nang-cao",
      tenKhoaHoc: "Khóa Học React Nâng Cao",
    },
    {
      maKhoaHoc: "React991028",
      biDanh: "the-complete-guide-incl-hooks-react-router-redux-",
      tenKhoaHoc: "The Complete Guide (incl Hooks, React Router, Redux)",
    },
    {
      maKhoaHoc: "sadasd",
      biDanh: "lap-trinh-tren-thiet-bi-di-dong",
      tenKhoaHoc: "Lập trình Trên Thiết Bị Di Động",
    },
  ];
  // -----TESTING DATA-----

  useEffect(() => {
    dispatch(fetchUnRegistCourseUserList(courseCodeName));
    dispatch(fetchRegistCourseUserList(courseCodeName));
    dispatch(fetchCourseList());
    dispatch(getInfoUserAction());
  }, [dispatch, courseCodeName]);

  const unRegistCourseUserList = useSelector((state) => {
    // console.log("Home unRegistCourseUserList gotten");
    return state.user.unRegistCourseUserList;
  });
  const registCourseUserList = useSelector(
    (state) => state.user.registCourseUserList
  );

  const courseList = useSelector((state) => {
    // console.log("Home courseList gotten");
    return state.course.courseList;
  });
  // console.log("courseList", courseList);

  const registCousre = (taiKhoan, maKhoaHoc) => {
    dispatch(registCourseAction(taiKhoan, maKhoaHoc));
  };
  const unRegistCourse = (taiKhoan, maKhoaHoc) => {
    dispatch(unRegistCourseAction(taiKhoan, maKhoaHoc));
  };

  // -----SETTING CỦA CÁC DANH SÁCH NẰM NGANG-----
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
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 4,
    initialSlide: 0,
    arrows: false,
    variableWidth: true,
  };
  // -----SETTING CỦA CÁC DANH SÁCH NẰM NGANG-----

  //-----CÁC HÀM RENDER DỮ LIỆU-----
  const renderSubjectListItemSlider = () => {
    const _courseList = [...courseList];
    return _courseList.map((item, index) => {
      const { tenKhoaHoc, maKhoaHoc } = item;
      return (
        <div
          onClick={() => {
            setCourseCodeName(maKhoaHoc);
            setCourseName(tenKhoaHoc);
          }}
          className="mx-3 py-3  border-t-2 border-b-2 border-gray-600 cursor-pointer"
          key={index}
        >
          {tenKhoaHoc}
        </div>
      );
    });
  };

  const renderRegistUserByCourseList = (list, isRegisted) => {
    return list.map((item, index) => {
      const { taiKhoan, hoTen } = item;
      return (
        <tr key={index}>
          <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center">
              <div className="ml-1">
                <div className="text-sm leading-5 font-medium text-gray-500">
                  Họ tên: {hoTen}
                </div>
                <div className="text-sm leading-5 text-gray-500">
                  Tài khoản: {taiKhoan}
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
                  Hủy ghi danh
                </button>
              </>
            )}
          </td>
        </tr>
      );
    });
  };

  const renderRegistCourseByUserList = (list, isRegisted) => {
    return list.map((item, index) => {
      const { tenKhoaHoc, maKhoaHoc } = item;
      return (
        <tr key={index}>
          <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center">
              <div className="ml-1">
                <div className="text-sm leading-5 font-medium text-gray-500">
                  <div> Tên khóa: </div>
                  <div>
                    {tenKhoaHoc.slice(0, 25)}
                    {tenKhoaHoc.lengh > 25 ? <span>...</span> : <></>}
                  </div>
                </div>
                <div className="text-sm leading-5 text-gray-500">
                  Mã: {maKhoaHoc}
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
                <button className="border-2 rounded p-1 border-green-500 hover:border-green-700 text-green-500 hover:text-green-700">
                  Ghi danh
                </button>
              </>
            ) : (
              <>
                <button className="border-2 rounded p-1 border-red-500 hover:border-red-700 text-red-500 hover:text-red-700">
                  Hủy ghi danh
                </button>
              </>
            )}
          </td>
        </tr>
      );
    });
  };

  const renderUnApprovalCourseList = () => {
    const list = [...unApprovalCourseList];
    return list.map((item, index) => {
      const { tenKhoaHoc, maKhoaHoc } = item;
      return (
        <tr key={index}>
          <td className="px-3 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center">
              <div className="ml-1">
                <div className="text-sm leading-5 font-medium text-gray-500">
                  <div>Tên khóa: </div>
                  <div>{tenKhoaHoc.slice(0, 25)}...</div>
                  <div>Mã: {maKhoaHoc}</div>
                </div>
              </div>
            </div>
          </td>
          {/* <td></td> */}
        </tr>
      );
    });
  };

  const renderUserList = () => {
    const list = [...userTestList];
    return list.map((item, index) => {
      const { hoTen } = item;
      return (
        <div key={index} onClick="" className="cursor-pointer">
          {hoTen}
        </div>
      );
    });
  };

  //-----CÁC HÀM RENDER DỮ LIỆU-----

  //-----CÁC HÀM CHUYỂN ĐỔI NỘI DUNG ĐƯỢC HIỂN THỊ KHI CLICK-----
  const setActiveRegisterItem = (uid) => {
    switch (uid) {
      case REGISTER_CONTENT.USER_IN_TO_COURSE:
        setRegisterContent(uid);
        return;
      case REGISTER_CONTENT.COURSE_BY_USER:
        setRegisterContent(uid);
        return;
      default:
        return;
    }
  };

  const setActiveMenuItem = (uid) => {
    switch (uid) {
      case MENU_CONTENT.HOME:
        setMenuContent(uid);
        return;

      case MENU_CONTENT.USER:
        setMenuContent(uid);
        return;

      case MENU_CONTENT.COURSE:
        setMenuContent(uid);
        return;

      case MENU_CONTENT.REGISTER:
        setMenuContent(uid);
        return;
      default:
        return;
    }
  };
  //-----CÁC HÀM CHUYỂN ĐỔI NỘI DUNG ĐƯỢC HIỂN THỊ KHI CLICK-----

  //-----CÁC HÀM CHỨA NỘI DUNG ĐƯỢC HIỂN THỊ THEO PHẦN ĐƯỢC CLICK-----
  const getRegiterContent = () => {
    const _unRegistCourseUserList = [...unRegistCourseUserList];
    const _unRegisterCourseList = [...unRegisterCourseList];
    const _regitedCourseList = [...regitedCourseList];
    switch (regiterContent) {
      case REGISTER_CONTENT.USER_IN_TO_COURSE:
        return (
          <main>
            <div>
              {/* -----Subject list slider start----- */}
              <div className="max-w-3xl">
                <Slider {...subjectListSliderSettings}>
                  {renderSubjectListItemSlider()}
                </Slider>
              </div>
              {/* -----Subject list slider end----- */}

              <div className="flex justify-evenly">
                {/* -----Chưa ghi danh list container start----- */}
                <div>
                  <p className="mb-1 ml-5 font-bold">Chưa ghi danh</p>
                  <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              {courseName.slice(0, 20)}...
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
                {/* -----Chưa ghi danh list container end----- */}

                {/* -----Đã ghi danh list container start----- */}
                <div>
                  <p className="mb-1 ml-5 font-bold">Đã ghi danh</p>
                  <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              {courseName.slice(0, 20)}...
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {renderRegistUserByCourseList(
                            registCourseUserList,
                            false
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* -----Đã ghi danh list container end----- */}
              </div>
            </div>
          </main>
        );
      case REGISTER_CONTENT.COURSE_BY_USER:
        return (
          <main>
            {/* -----User list slider start----- */}
            <div>
              <p className="p-3 font-bold">Danh sách học viên</p>
              <div className="max-w-3xl px-4 border-t-2 border-b-2 border-gray-500">
                <Slider {...userListSliderSettings}>{renderUserList()}</Slider>
              </div>
            </div>
            {/* -----User list slider end----- */}

            <div className="flex justify-evenly mt-5">
              {/* -----Chưa ghi danh course container start----- */}
              <div>
                <div className="-my-2 py-4 py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Khóa học chưa danh
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {renderRegistCourseByUserList(
                          _unRegisterCourseList,
                          true
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* -----Chưa ghi danh course container end----- */}

              {/* -----Đã ghi danh course container start----- */}
              <div>
                <div className="-my-2 py-4 py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Khóa học đã ghi danh
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {renderRegistCourseByUserList(
                          _regitedCourseList,
                          false
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* -----Đã ghi danh course container end----- */}

              {/* -----Danh sách khóa chờ xét duyệt container start----- */}
              <div>
                <div className="-my-2 py-4 py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Khóa học chờ xét duyệt
                          </th>
                          {/* <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" /> */}
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {renderUnApprovalCourseList()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* -----Danh sách khóa chờ xét duyệt container end----- */}
            </div>
          </main>
        );
      case REGISTER_CONTENT.TEST_UI:
        return <main>TEST UI</main>;
      default:
        return;
    }
  };

  const getMenuContent = () => {
    switch (menuContent) {
      case MENU_CONTENT.User:
        return (
          <main>
            <User />
          </main>
        );

      case MENU_CONTENT.COURSE:
        return <Course />;

      case MENU_CONTENT.REGISTER:
        return (
          <>
            <h3 className="text-gray-700 text-3xl font-medium">Ghi danh</h3>

            {/* -----Switch người dùng/ khóa học start----- */}
            <div className="mt-3">
              <div className="flex flex-wrap -mx-6 justify-evenly">
                {/* -----Người dùng button start----- */}
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <div className="flex items-center px-6 py-3 shadow-sm rounded-md bg-white">
                    <div className="mx-5">
                      <button
                        onClick={() => setActiveRegisterItem("userToCourse")}
                        className="text-gray-500"
                      >
                        Người dùng vào khóa học
                      </button>
                    </div>
                  </div>
                </div>
                {/* -----Người dùng button end----- */}

                {/* -----Khóa học button start----- */}
                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                  <div className="flex items-center px-6 py-3 shadow-sm rounded-md bg-white">
                    <div className="mx-5">
                      <button
                        onClick={() => setActiveRegisterItem("courseByUser")}
                        className="text-gray-500"
                      >
                        Khóa học cho người dùng
                      </button>
                    </div>
                  </div>
                </div>
                {/* -----Khóa học button end----- */}
              </div>
            </div>
            {/* -----Switch người dùng/ khóa học end----- */}

            {/* -----List container start----- */}
            <div className="mt-8">{getRegiterContent()}</div>
            <div className="flex flex-col mt-8">
              <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">
                                John Doe
                              </div>
                              <div className="text-sm leading-5 text-gray-500">
                                john@example.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            Software Engineer
                          </div>
                          <div className="text-sm leading-5 text-gray-500">
                            Web dev
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          Owner
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* -----List container end----- */}
          </>
        );

      default:
        return <User />;
    }
  };
  //-----CÁC HÀM CHỨA NỘI DUNG ĐƯỢC HIỂN THỊ THEO PHẦN ĐƯỢC CLICK-----

  setActiveMenuItem();

  return (
    <div className="h-screen overflow-hidden" style={{ background: "#edf2f7" }}>
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script>

      <div className="flex h-screen bg-gray-200">
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden `}
          onClick={() => {
            setSidebarOpen(false);
          }}
        />

        {/* -----Side bar start----- */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
          } fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 `}
        >
          {/* -----Dashboard icon start----- */}
          <div className="flex items-center m-4">
            <div className="flex items-center">
              <svg
                className="h-12 w-12"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                  fill="#4C51BF"
                  stroke="#4C51BF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-2xl mx-2 font-semibold">
                Dashboard
              </span>
            </div>
          </div>
          {/* -----Dashboard icon end----- */}

          {/* -----Side bar buttons start----- */}
          <nav>
            <div
              onClick={() => {
                setActiveMenuItem("home");
              }}
              className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <span className="mx-3">Người Dùng</span>
            </div>
            <div
              onClick={() => {
                setActiveMenuItem("course");
              }}
              className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
              <span className="mx-3">Khóa học</span>
            </div>
            <div
              onClick={() => {
                setActiveMenuItem("register");
              }}
              className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
              <span className="mx-3">Ghi danh</span>
            </div>
          </nav>
          {/* -----Side bar buttons end----- */}
        </div>
        {/* -----Side bar end----- */}

        {/* -----Content start----- */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex justify-end items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
            {/* -----User avatar container start----- */}
            <div className="relative">
              <button
                onClick={() => {
                  return setDropdownOpen(!dropdownOpen);
                }}
                className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
              >
                <img
                  className="h-full w-full object-cover"
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt="Your avatar"
                />
              </button>
              <div
                // x-show="dropdownOpen"
                // onClick="dropdownOpen = false"
                onClick={() => {
                  setDropdownOpen(false);
                }}
                className="fixed inset-0 h-full w-full z-10"
                style={{ display: "none" }}
              />
              <div
                className={` ${
                  !dropdownOpen ? "hidden" : ""
                } absolute right-0 mt-2 max-w-96  bg-white rounded-md  shadow-xl z-10`}
              >
                <div className="max-w-md p-5 sm:flex sm:space-x-6 bg-coolGray-50 text-coolGray-800">
                  <div className="flex-shrink-0 w-auto  mb-6 h-44 sm:h-28 sm:w-28 sm:mb-0">
                    <img
                      src="https://source.unsplash.com/100x100/?portrait"
                      alt=""
                      className="object-cover object-center w-full h-full rounded bg-coolGray-500"
                    />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {userLogin.taiKhoan}
                      </h2>
                      <span className="text-sm text-coolGray-600">
                        {userLogin.hoTen}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-label="Email address"
                          className="w-4 h-4"
                        >
                          <path
                            fill="currentColor"
                            d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                          ></path>
                        </svg>
                        <span className="text-coolGray-600 text-sm">
                          {userLogin.email}
                        </span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-label="Phonenumber"
                          className="w-4 h-4"
                        >
                          <path
                            fill="currentColor"
                            d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                          ></path>
                        </svg>
                        <span className="text-coolGray-600 text-sm">
                          {userLogin.soDT}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  onClick={() => {
                    localStorage.removeItem(TOKEN);
                    history.push("/signin");
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white cursor-pointer"
                >
                  Logout
                </a>
              </div>
            </div>
            {/* -----User avatar container end----- */}
          </header>
          <main className="overflow-y-auto p-6">{getMenuContent()}</main>
        </div>
        {/* -----Content end----- */}
      </div>
    </div>
  );
}
