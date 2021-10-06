/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

import {
  fetchUnRegistCourseUserList,
  fetchRegistedCourseUserList,
  fecthUnRegistCourseList,
  fecthRegistedCourseList,
  fecthUnApprovalCourseList,
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
import Register from "../Register";
import { CODE_GROUP } from "../../util/settings/config";

const MENU_CONTENT = {
  USER: "user",
  COURSE: "course",
  REGISTER: "register",
};

const REGISTER_CONTENT = {
  USER_IN_TO_COURSE: "userToCourse",
  COURSE_BY_USER: "courseByUser",
  TEST_UI: "test-ui",
};


export default function Home() {

  const registedCourseCodeName = useSelector((state) => {
    return state.user.registedCourseCodeName;
  })

  const registedCourseName = useSelector((state) => {
    return state.user.registedCourseName;
  })

  const registedAccountName = useSelector((state) => {
    return state.user.registedAccountName;
  })

  const courseList = useSelector((state) => {
    return state.course.courseList;
  });

  const userList = useSelector((state) => {
    return state.user.listUser;
  })

  const registCousre = (taiKhoan, maKhoaHoc) => {
    dispatch(registCourseAction(taiKhoan, maKhoaHoc));
  };
  const unRegistCourse = (taiKhoan, maKhoaHoc) => {
    dispatch(unRegistCourseAction(taiKhoan, maKhoaHoc));
  };

  const dispatch = useDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuContent, setMenuContent] = useState("");

  const [regiterContent, setRegisterContent] = useState("userToCourse");
  const [courseCodeName, setCourseCodeName] = useState(registedCourseCodeName); //test: "ITEC2104"
  const [accountName, setAccountName] = useState(registedAccountName); //text:"khai"
  const [courseName, setCourseName] = useState(registedCourseName);

  useEffect(() => {
    dispatch(fetchUnRegistCourseUserList(courseCodeName));
    dispatch(fetchRegistedCourseUserList(courseCodeName));
    dispatch(fecthUnRegistCourseList(accountName));
    dispatch(fecthRegistedCourseList(accountName));
    dispatch(fecthUnApprovalCourseList(accountName));
    dispatch(fetchCourseList());
    dispatch(getInfoUserAction());
  }, [dispatch, courseCodeName, accountName]);


  const setActiveMenuItem = (uid) => {
    switch (uid) {
      case MENU_CONTENT.USER:
        setMenuContent(uid);
        dispatch(getInfoUserAction());
        break;

      case MENU_CONTENT.COURSE:
        setMenuContent(uid);
        dispatch(fetchCourseList());
        break;

      case MENU_CONTENT.REGISTER:
        setMenuContent(uid);
        break;
      default:
        break;
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
        return <main><Register /></main>

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
          className={`${sidebarOpen ? "block" : "hidden"
            } fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden `}
          onClick={() => {
            setSidebarOpen(false);
          }}
        />

        {/* -----Side bar start----- */}
        <div
          className={`${sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
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
                setActiveMenuItem("user");
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
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
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
                className={` ${!dropdownOpen ? "hidden" : ""
                  } absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10`}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >
                  Products
                </a>
                <a
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
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
