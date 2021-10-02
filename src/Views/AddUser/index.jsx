import React, { useCallback } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../Redux/Actions/UserAction";

export default function AddUser() {
  const dispatch = useDispatch();
  //   const goToInfoUser =()=>{

  //   }
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
    }, []),
  });
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full  flex">
            {/* Col */}
            <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
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
                <div className="mb-6 text-center">
                  <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                    Thêm người dùng
                  </button>
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
