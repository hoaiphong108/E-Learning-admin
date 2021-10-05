import React, { useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { useSelector, useDispatch } from "react-redux";

// Style
import "react-tailwind-table/dist/index.css";

// Components
import SearchBox from "./SearchBox";
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

  const [dataDemo, setDataDemo] = useState([]);

  useEffect(() => {
    setDataDemo(courseList);
  }, [courseList]);

  const handleShowModal = (action) => {
    console.log("action", action);
    dispatch(action);
  };

  const handleDeleteCourse = (dataRequest) => {
    dispatch(deleteCourse(dataRequest));
  };

  console.log("courseList", courseList);
  const data = React.useMemo(() => courseList, [courseList]);

  const columns = React.useMemo(() => [
    {
      Header: "Tên Khóa Học",
      accessor: "tenKhoaHoc",
      width: 300,
    },
    {
      Header: "Hình Ảnh",
      accessor: "hinhAnh",
      maxWidth: 500,
      minWidth: 500,
      Cell: ({ cell: { value } }) => (
        <img
          src={value}
          alt="Hình ảnh"
          style={{ minWidth: 220, maxWidth: 220 }}
        />
      ),
    },
    {
      Header: "Mô Tả",
      accessor: "moTa",
      Cell: ({ cell: { value } }) => value.slice(0, 150) + "...",
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
      className: "text-center",
      maxWidth: 300,
      minWidth: 300,
      Cell: ({ cell: { value } }) => (
        <div style={{ minWidth: 100 }} className="text-center">
          <button
            className="border-2 rounded p-1 border-green-500 hover:border-green-700 text-green-500 hover:text-green-700"
            onClick={() => {
              handleShowModal(showEditModal(true));
            }}
          >
            Sửa
          </button>
          <button
            className="border-2 rounded p-1 border-red-500 hover:border-red-700 text-red-500 hover:text-red-700 ml-2"
            onClick={handleDeleteCourse(courseList.maKhoaHoc)}
          >
            Xóa
          </button>
        </div>
      ),
    },
  ]);

  return (
    <>
      <>
        <h4 class="text-gray-700 text-2xl font-medium mb-8">
          Danh Sách Khóa Học
        </h4>
        <div className="flex justify-between items-center mb-4">
          <SearchBox />
          <button
            className="border-2 w-40 rounded p-1 border-green-500 hover:border-green-700 text-green-500 hover:text-green-700"
            onClick={() => {
              handleShowModal(showCreateModal(true));
            }}
          >
            Thêm
          </button>
        </div>
        <CourseList columns={columns} data={data} />
      </>
      <AddCourseModal />
      <EditCourseModal />
    </>
  );
};

export default Course;
