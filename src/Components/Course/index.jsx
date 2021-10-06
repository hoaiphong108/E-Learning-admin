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
  deleteCourseAction,
  showCreateModal,
  showEditModal,
} from "../../Redux/Actions/CourseAction";
import { createAction } from "../../Redux/Actions";
import { actionCourseTypes } from "../../Redux/Actions/Types/CourseType";

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
    dispatch(action);
  };

  const handleDeleteCourse = (maKhoaHoc) => {
    dispatch(deleteCourseAction(maKhoaHoc));
  };

  // console.log("courseList", courseList);
  const data = React.useMemo(() => courseList, [courseList]);

  const columns = React.useMemo(() => [
    {
      Header: "Tên Khóa Học",
      accessor: "tenKhoaHoc",
      width: 170,
      minWidth: 170,
    },
    {
      Header: "Hình Ảnh",
      accessor: "hinhAnh",
      width: 180,
      minWidth: 180,
      Cell: ({ cell: { value } }) => (
        <img
          src={value}
          alt="Hình ảnh"
          style={{ minWidth: 180, maxWidth: 180 }}
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
      width: 90,
      minWidth: 90,
    },
    {
      Header: "Người Tạo",
      accessor: "nguoiTao.hoTen",
      width: 140,
      minWidth: 140,
    },
    {
      Header: "Ngày Tạo",
      accessor: "ngayTao",
      width: 100,
      minWidth: 100,
    },
    {
      Header: "Action",
      accessor: "action",

      className: "text-center",
      width: 110,
      minWidth: 110,

      Cell: (props) => {
        // console.log(props.row.original);
        return (
          <div style={{ minWidth: 100 }} className="text-center">
            <button
              className="border-2 rounded p-1 border-green-500 hover:border-green-700 text-green-500 hover:text-green-700"
              onClick={() => {
                handleShowModal(showEditModal(true));
                dispatch(
                  createAction(
                    actionCourseTypes.UPDATE_COURSE,
                    props.row.original
                  )
                );
              }}
            >
              Sửa
            </button>
            <button
              className="border-2 rounded p-1 border-red-500 hover:border-red-700 text-red-500 hover:text-red-700 ml-2"
              onClick={() => {
                handleDeleteCourse(props.row.original.maKhoaHoc);
              }}
            >
              Xóa
            </button>
          </div>
        );
      },
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
            className="border-1 w-40 rounded p-1.5 text-white bg-green-500 hover:bg-green-700"
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
