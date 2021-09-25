import { useFormik } from "formik";
import React, { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signInAction } from "../../Redux/Actions/UserAction";

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.user.userLogin);

  const { maLoaiNguoiDung } = userLogin || {};
  const goTo = useCallback(() => {
    if (maLoaiNguoiDung === "GV") {
      return history.push("/");
    } else {
      alert("Người dùng không phải GV");
      return history.push("/signin");
    }
  }, [maLoaiNguoiDung, history]);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: useCallback(
      (values) => {
        const action = signInAction(values, goTo);
        dispatch(action);
        return;
      },
      [dispatch, goTo]
    ),
  });

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor
              className="block mt-3 text-2xl text-gray-700 text-center font-semibold"
            >
              Đăng Nhập
            </label>
            <form onSubmit={formik.handleSubmit} className="mt-10">
              <div className="">
                <input
                  name="taiKhoan"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Tài khoản"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-2"
                />
              </div>
              <div className="mt-7 ">
                <input
                  type="password"
                  name="matKhau"
                  onChange={formik.handleChange}
                  placeholder="Mật khẩu"
                  className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Đăng nhập
                </button>
              </div>
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full"></label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>
                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
