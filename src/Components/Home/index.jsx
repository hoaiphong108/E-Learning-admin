/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInfoUserAction } from "../../Redux/Actions/UserAction";
import AddUser from "../../Views/AddUser";
import { useHistory } from "react-router";

import InfoUser from "../../Views/InfoUser";
import "./style.css";

// Components
import Course from "../Course";
import "./style.css";

// Redux store
import { fetchCourseList } from "../../Redux/Actions/CourseAction";
import EditUserModal from "../User/EditUserModal";
import AddUserModal from "../User/AddUserModal";
import { createAction } from "../../Redux/Actions";
import { SIGN_OUT } from "../../Redux/Actions/Types/UserType";
import { TOKEN } from "../../util/settings/config";

const MENU_CONTENT = {
  HOME: "home",
  ADD_USER: "add-user",
  FORMS: "forms",
  UI_ELEMENTS: "ui-elements",
  COURSE: "course",
};

/**
 * test commit
 */

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoUserAction());
  });
  const listUser = useSelector((state) => state.user.listUser);
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [menuContent, setMenuContent] = useState("");

  const setActiveMenuItem = (uid) => {
    switch (uid) {
      case MENU_CONTENT.HOME:
        setMenuContent(uid);
        break;

      case MENU_CONTENT.ADD_USER:
        setMenuContent(uid);
        break;
      case MENU_CONTENT.COURSE:
        setMenuContent(uid);
        dispatch(fetchCourseList());
        break;
      default:
        return;
    }
  };

  const getMenuContent = () => {
    switch (menuContent) {
      case MENU_CONTENT.ADD_USER:
        return (
          <main>
            <AddUser />
          </main>
        );

      case MENU_CONTENT.COURSE:
        return <Course />;

      default:
        return (
          <main className="overflow-y-auto">
            <InfoUser listUser={listUser} />

            <EditUserModal />
            <AddUserModal />
          </main>
        );
    }
  };

  setActiveMenuItem();

  return (
    <div
      className="h-screen overflow-hidden flex justify-center"
      style={{ background: "#edf2f7" }}
    >
      <div className="flex h-screen bg-gray-200">
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden `}
          onClick={() => {
            setSidebarOpen(false);
          }}
        />
        <div
          className={`${
            sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
          } fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 `}
        >
          <div className="flex items-center justify-center mt-8">
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
          <nav className="mt-10">
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
              <span className="mx-3">Khóa Học</span>
            </div>
          </nav>
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
            <div className="flex items-center">
              <button
                onClick={() => {
                  setSidebarOpen(true);
                }}
                className="text-gray-500 focus:outline-none lg:hidden"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H11"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center">
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
                  className={` ${
                    dropdownOpen ? "hidden" : ""
                  } absolute right-0 mt-2 w-auto bg-white rounded-md  shadow-xl z-10`}
                >
                  <a className="block px-4 py-2 ">
                    <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-coolGray-50 text-coolGray-800">
                      <div className="flex-shrink-0  mb-6 h-44 sm:h-28 sm:w- sm:mb-0">
                        <img
                          src="https://source.unsplash.com/100x100/?portrait"
                          alt=""
                          className="object-cover object-center w-full h-full rounded bg-coolGray-500"
                        />
                      </div>
                      <div className="flex flex-col space-y-4">
                        <div>
                          <h2 className="text-2xl font-semibold">
                            Leroy Jenkins
                          </h2>
                          <span className="text-sm text-coolGray-600">
                            General manager
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
                            <span className="text-coolGray-600">
                              leroy.jenkins@company.com
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
                            <span className="text-coolGray-600">
                              +25 381 77 983
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    onClick={() => {
                      localStorage.removeItem(TOKEN);
                      history.push("/signin");
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >
                    Đăng xuất
                  </a>
                </div>
              </div>
            </div>
          </header>
          {getMenuContent()}
        </div>
      </div>
    </div>
  );
}
