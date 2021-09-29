/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getInfoUserAction } from "../../Redux/Actions/UserAction";
import AddUser from "../../Views/AddUser";
import EditInfo from "../../Views/EditInfo";
import InfoUser from "../../Views/InfoUser";
import "./style.css";

const MENU_CONTENT = {
  HOME: "home",
  ADD_USER: "add-user",
  FORMS: "forms",
  UI_ELEMENTS: "ui-elements",
};

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoUserAction());
  }, []);
  const listUser = useSelector((state) => state.user.listUser);

  const [dropdownOpen, setDropdownOpen] = useState(true);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [menuContent, setMenuContent] = useState("");

  const setActiveMenuItem = (uid) => {
    switch (uid) {
      case MENU_CONTENT.HOME:
        setMenuContent(uid);
        return;

      case MENU_CONTENT.ADD_USER:
        setMenuContent(uid);
        return;

      case MENU_CONTENT.FORMS:
        setMenuContent(uid);
        return;

      case MENU_CONTENT.UI_ELEMENTS:
        setMenuContent(uid);
        return;

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

      case MENU_CONTENT.FORMS:
        return <main>forms</main>;

      case MENU_CONTENT.UI_ELEMENTS:
        return <main>ui-elements</main>;

      default:
        return (
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 relative">
            <InfoUser listUser={listUser} />
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
      {/* <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script> */}

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
              <span className="mx-3">Danh Sách Người Dùng</span>
            </div>
            <div
              onClick={() => {
                setActiveMenuItem("ui-elements");
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
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                ></path>
              </svg>
              <span className="mx-3">Xóa Người Dùng</span>
            </div>
            <div
              onClick={() => {
                setActiveMenuItem("add-user");
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
              <span className="mx-3">Thêm người dùng</span>
            </div>
            <div
              onClick={() => {
                setActiveMenuItem("forms");
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
              <span className="mx-3">Tìm kiếm người dùng</span>
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
              <div className="relative mx-4 lg:mx-0">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600 focus:outline-none focus:ring-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
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
            </div>
          </header>
          {getMenuContent()}
        </div>
      </div>
    </div>
  );
}
