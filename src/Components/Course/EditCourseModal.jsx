import { Fragment, useRef, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";

import { useFormik } from "formik";

// Redux
import {
  showEditModal,
  updateCourseToList,
} from "../../Redux/Actions/CourseAction";

export default function EditCourseModal(props) {
  const dispatch = useDispatch();

  const courseUpdated = useSelector((state) => state.course.courseUpdated);

  const showEditCourseModal = useSelector((state) => {
    return state.course.showEditCourseModal;
  });

  const handleHideModal = () => {
    dispatch(showEditModal(false));
  };

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: courseUpdated.maKhoaHoc,
      biDanh: courseUpdated.biDanh,
      tenKhoaHoc: courseUpdated.tenKhoaHoc,
      moTa: courseUpdated.moTa,
      luotXem: courseUpdated.luotXem,
      danhGia: courseUpdated.danhGia,
      hinhAnh: courseUpdated.hinhAnh,
      maNhom: courseUpdated.maNhom,
      ngayTao: courseUpdated.ngayTao,
      maDanhMucKhoaHoc: courseUpdated.maDanhMucKhoaHoc,
      taiKhoanNguoiTao: courseUpdated.taiKhoanNguoiTao,
    },
    onSubmit: useCallback((values) => {
      console.log("values", values);

      dispatch(updateCourseToList(values));
      
      handleHideModal();
    }, []),
  });

  return (
    <Transition.Root show={showEditCourseModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleHideModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="text-2xl text-center font-bold">Sửa khóa học</h3>
                <form
                  className="pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="grid grid-cols-1">
                    <div>
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Mã Khóa Học
                      </label>
                      <input
                        value={formik.values.maKhoaHoc}
                        onChange={formik.handleChange}
                        name="maKhoaHoc"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Mã Khóa Học"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Tên Khóa Học
                      </label>
                      <input
                        value={formik.values.tenKhoaHoc}
                        onChange={formik.handleChange}
                        name="tenKhoaHoc"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Tên Khóa Học"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Mô Tả
                      </label>
                      <textarea
                        value={formik.values.moTa}
                        onChange={formik.handleChange}
                        name="moTa"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Tên Khóa Học"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Upload Hình Ảnh
                      </label>
                      <input
                        value={formik.values.hinhAnh}
                        onChange={formik.handleChange}
                        name="hinhAnh"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="file"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-6 mt-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          Lượt xem
                        </label>
                        <input
                          value={formik.values.luotXem}
                          onChange={formik.handleChange}
                          name="luotXem"
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Lượt xem"
                        />
                      </div>
                      <div className="col-6 mt-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          Mã Nhóm
                        </label>
                        <input
                          value={formik.values.maNhom}
                          onChange={formik.handleChange}
                          name="maNhom"
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="GP01-GP07"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Mã Danh Mục Khóa Học
                      </label>
                      <input
                        value={formik.values.maDanhMucKhoaHoc}
                        onChange={formik.handleChange}
                        name="maDanhMucKhoaHoc"
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Mã Danh Mục Khóa Học"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Đánh giá
                      </label>
                      <input
                        value={formik.values.danhGia}
                        onChange={formik.handleChange}
                        name="danhGia"
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Đánh giá"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Tài Khoản Người Tạo
                      </label>
                      <input
                        value={formik.values.dantaiKhoanNguoiTaohGia}
                        onChange={formik.handleChange}
                        name="taiKhoanNguoiTao"
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Tài Khoản Người Tạo"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Bí Danh
                      </label>
                      <input
                        value={formik.values.biDanh}
                        onChange={formik.handleChange}
                        name="biDanh"
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Bí Danh"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Ngày Tạo
                    </label>
                    <input
                      value={formik.values.ngayTao}
                      onChange={formik.handleChange}
                      name="ngayTao"
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="Ngày Tạo"
                    />
                  </div>
                  <div className="text-right mt-4">
                    <button
                      type="button"
                      className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      onClick={() => {
                        handleHideModal();
                      }}
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="rounded-md border border-gray-300 shadow-sm px-4 py-2 ml-4 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sửa
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
