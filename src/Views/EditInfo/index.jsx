import { useFormik } from "formik";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../Redux/Actions/UserAction";

export default function EditInfo(props) {
  const dispatch = useDispatch();
  const userEdit = useSelector((state) => state.user.userEdit);

  const formik = useFormik({
    initialValues: {
      taiKhoan: userEdit.taiKhoan,
      matKhau: userEdit.matKhau,
      hoTen: userEdit.hoTen,
      soDT: userEdit.soDt,
      maLoaiNguoiDung: userEdit.maLoaiNguoiDung,
      maNhom: userEdit.maNhom,
      email: userEdit.email,
    },
    onSubmit: useCallback((values) => {
      const action = updateUserAction(values);
      dispatch(action);
    }, []),
  });

  return (
    <>
      <div className="container mx-auto max-w-2xl      ">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full  flex">
            {/* Col */}
            <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
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
                      value={formik.values.taiKhoan}
                      onChange={formik.handleChange}
                      name="taiKhoan"
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      disabled
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Họ tên
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.hoTen}
                      name="hoTen"
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
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
                    value={formik.values.maLoaiNguoiDung}
                    name="maLoaiNguoiDung"
                    required
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    // placeholder="GV/HV"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Email
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="email"
                      required
                      name="email"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Mã nhóm
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.maNhom}
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
                      value={formik.values.soDT}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="phone"
                      required
                      name="soDT"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Mât khẩu
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      required
                      name="matKhau"
                      value={formik.values.matKhau}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    type="button"
                    className=" px-4 py-2 mr-3 font-bold text-black bg-gray-100 rounded-full hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                    onClick={() => {
                      props.handleShowEdit();
                    }}
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className=" px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  >
                    Xác nhận
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
