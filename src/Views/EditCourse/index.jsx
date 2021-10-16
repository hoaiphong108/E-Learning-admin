import { useFormik } from "formik";
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  showEditModal,
  updateCourseToListAction,
} from "../../Redux/Actions/CourseAction";

export default function EditCourse() {
  const dispatch = useDispatch();

  const courseUpdated =
    useSelector((state) => state.course.courseUpdated) || {};

  const [imgSrc, setImgSrc] = useState(courseUpdated.hinhAnh);

  const handleHideModal = () => {
    dispatch(showEditModal(false));
  };

  const hanldeChangeFile = (event) => {
    let file = event.target.files[0];

    if (
      file.type === "image/jpg" ||
      file.type === "image/png" ||
      file.type === "image/jpeg"
    ) {
      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (event) => {
        setImgSrc(event.target.result);
      };

      formik.setValues("hinhAnh", file);
    }
  };

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: courseUpdated.maKhoaHoc,
      biDanh: courseUpdated.biDanh,
      tenKhoaHoc: courseUpdated.tenKhoaHoc,
      moTa: courseUpdated.moTa,
      luotXem: courseUpdated.luotXem,
      danhGia: courseUpdated?.danhGia,
      hinhAnh: courseUpdated.hinhAnh,
      maNhom: courseUpdated.maNhom,
      ngayTao: courseUpdated.ngayTao,
      maDanhMucKhoaHoc: courseUpdated.danhMucKhoaHoc?.maDanhMucKhoahoc,
      taiKhoanNguoiTao: courseUpdated.nguoiTao?.taiKhoan,
    },

    onSubmit: useCallback(
      (values) => {
        // let formData = new FormData();

        // for (let key in values) {
        //   if (key !== "hinhAnh") {
        //     formData.append(key, values[key]);
        //   } else {
        //     formData.append("File", values.hinhAnh, values.hinhAnh.name);
        //   }
        // }

        // dispatch(updateCourseToListAction(formData));
        dispatch(updateCourseToListAction(values));

        handleHideModal();
      },
      [handleHideModal, courseUpdated]
    ),
  });

  return (
    <>
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
              onChange={formik.handleChange}
              name="hinhAnh"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="file"
              accept="image/jpg, image/png, image/jpeg"
            />
            <img
              src={imgSrc}
              alt="Upload image"
              style={{ width: 180, height: 180 }}
              className="mt-2"
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
              value={formik.values.taiKhoanNguoiTao}
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
            className="rounded-md border border-transparent shadow-sm px-4 py-1.5 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => {
              handleHideModal();
            }}
          >
            Hủy
          </button>
          <button
            type="submit"
            className="rounded-md border border-gray-300 shadow-sm px-4 py-1.5 ml-4 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sửa
          </button>
        </div>
      </form>
    </>
  );
}
