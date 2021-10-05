import React, { useState } from "react";
import { useTable, usePagination } from "react-table";
import { useSelector, useDispatch } from "react-redux";

// Style
import "react-tailwind-table/dist/index.css";

// Components
import CourseList from "./CourseList";
import AddCourseModal from "./AddCourseModal";
import EditCourseModal from "./EditCourseModal";

// Redux
import {
  deleteCourse,
  showCreateModal,
  showEditModal,
} from "../../Redux/Actions/CourseAction";

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
  };

  const data = React.useMemo(() => courseList);

  const columns = React.useMemo(() => [
    {
      Header: "Tên Khóa Học",
      accessor: "tenKhoaHoc",
      width: 300,
    },
    {
      Header: "Hình Ảnh",
      accessor: "hinhAnh",
      width: 300,
      Cell: (cell) => {
        console.log("cell.values", cell);
        return (
          <img
            src={cell.values}
            alt="Hình ảnh"
            style={{ minWidth: 220, maxWidth: 220 }}
          />
        );
      },
    },
    {
      Header: "Mô Tả",
      accessor: "moTa",
    },
    {
      Header: "Lượt Xem",
      accessor: "luotXem",
      width: 300,
    },
    {
      Header: "Người Tạo",
      accessor: "nguoiTao.hoTen",
      width: 300,
    },
    {
      Header: "Ngày Tạo",
      accessor: "ngayTao",
      width: 300,
    },
    {
      Header: "Action",
      accessor: "action",
      width: 300,
    },
  ]);

  return (
    <>
      <>
        <h4 class="text-gray-700 text-2xl font-medium mb-4">
          Danh Sách Khóa Học
        </h4>
        <CourseList columns={columns} data={data} />
      </>
      <AddCourseModal />
      <EditCourseModal />
    </>
  );
};

export default Course;
