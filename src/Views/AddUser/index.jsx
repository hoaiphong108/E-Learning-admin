import React, { useCallback } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../../Redux/Actions/UserAction";
import { createAction } from "../../Redux/Actions";
import { ADD_USER_MODAL } from "../../Redux/Actions/Types/UserType";

export default function AddUser() {
  const dispatch = useDispatch();

  const addModal = useSelector((state) => state.user.addModal);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "",
      email: "",
    },

    onSubmit: useCallback((values) => {
      const action = addUserAction(values);
      dispatch(action);
      dispatch(createAction(ADD_USER_MODAL, false));
    }, []),
  });
  const hideModal = () => {
    dispatch(createAction(ADD_USER_MODAL, false));
  };
  return (
    <>
      <div className="px-8 mx-auto">
        <div className="flex justify-center  ">
          <div className="w-full  flex">
            {/* Col */}
            <div className="w-full bg-white rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Tạo Tài Khỏan!</h3>
              <form
                className=" pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={formik.handleSubmit}
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Tài Khoản
                    </label>
                    <input
                      onChange={formik.handleChange}
                      name="taiKhoan"
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Tài khoản"
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Họ tên
                    </label>
                    <input
                      onChange={formik.handleChange}
                      name="hoTen"
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Họ tên"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Mã loại người dùng
                  </label>
                  <input
                    onChange={formik.handleChange}
                    name="maLoaiNguoiDung"
                    required
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="GV/HV"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Email
                    </label>
                    <input
                      onChange={formik.handleChange}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="email"
                      required
                      name="email"
                      placeholder="email"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Mã nhóm
                    </label>
                    <input
                      onChange={formik.handleChange}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      name="maNhom"
                      required
                      placeholder="GP01-GP07"
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Số DT
                    </label>
                    <input
                      onChange={formik.handleChange}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="phone"
                      required
                      name="soDT"
                      placeholder="số dt"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Mât khẩu
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="password"
                      required
                      name="matKhau"
                      onChange={formik.handleChange}
                      placeholder="*********"
                    />
                  </div>
                </div>
                <div className=" text-right  ">
                  <button
                    type="submit"
                    className="rounded-md border border-gray-300 shadow-sm px-4 py-2  bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Thêm người dùng
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      hideModal();
                    }}
                    className="rounded-md border border-transparent shadow-sm px-4 py-2 ml-4 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
