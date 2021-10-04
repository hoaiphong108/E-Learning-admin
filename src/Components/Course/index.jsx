import React, { useState } from "react";
import Table from "react-tailwind-table";
import { useSelector, useDispatch } from "react-redux";

// Style
import "react-tailwind-table/dist/index.css";

// Components
import AddCourseModal from "./AddCourseModal";
import EditCourseModal from "./EditCourseModal";

// Redux
import { deleteCourse, showCreateModal, showEditModal } from "../../Redux/Actions/CourseAction";

const Course = () => {
  const dispatch = useDispatch();

  const courseList = useSelector((state) => {
    return state.course.courseList;
  });

  const handleShowModal = (action) => {
    dispatch(action);
  };

  const handleDeleteCourse = (dataRequest) => {
    dispatch(deleteCourse(dataRequest));
  }

  const rowRender = (row, column) => {
    if (column.field === "action") {
      return (
        <div className="text-center">
          <button
            className="py-3 text-xl text-white bg-green-600 rounded-lg"
            onClick={() => {
              handleShowModal(showEditModal(true));
            }}
          >
            Sửa
          </button>
          <button className="py-3 text-white bg-red-600 rounded-lg" onClick={() => {
            handleDeleteCourse(courseList.maKhoaHoc)
          }}>Xóa</button>
        </div>
      );
    }
  };

  const rows = courseList;

  const columns = [
    {
      field: "tenKhoaHoc",
      use: "Tên Khóa Học",
    },
    {
      field: "hinhAnh",
      use: "Hình Ảnh",
    },
    {
      field: "moTa",
      use: "Mô Tả",
    },
    {
      field: "luotXem",
      use: "Lượt Xem",
    },
    {
      field: "nguoiTao.hoTen",
      use: "Người Tạo",
    },
    {
      field: "ngayTao",
      use: "Ngày Tạo",
    },
    {
      field: "action",
      use: "Action",
    },
  ];

  return (
    <div className="overflow-y-auto">
      <div className="text-right">
        <button className="py-2 px-4 text-xl text-purple-600 hover:bg-purple-600 hover:text-white" onClick={() => {
          handleShowModal(showCreateModal(true))
        }}>
          Thêm Khóa Học
        </button>
      </div>
      <Table columns={columns} rows={rows} row_render={rowRender} />
      <AddCourseModal />
      <EditCourseModal />
    </div>
  );
};

export default Course;
