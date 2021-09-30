import React from "react";
import Table from "react-tailwind-table";
import { useSelector } from "react-redux";

// Style
import "react-tailwind-table/dist/index.css";

// Components
import AddCourseModal from "./AddCourseModal";

const Course = () => {
  const courseList = useSelector((state) => {
    return state.course.courseList;
  });

  const {
    hinhAnh,
    tenKhoaHoc,
    nguoiTao,
    ngayTao,
    luotXem,
    moTa,
    maKhoaHoc
  } = courseList;

  console.log("courseList", courseList);

  //The full data format can be
  var rows = [
    {
      id: 1,
      name: "tenKhoaHoc",
      country_id: 3,
      club_id: 2,
      front_end_position: {
        name: {
          full_name: "Forward",
          short_code: "FW",
        },
        id: 2,
      },
    },
    {
      id: 3,
      name: "Virgil VanDijk",
      country_id: 30,
      club_id: 2,
      front_end_position: {
        name: {
          full_name: "Defence",
          short_code: "DF",
        },
        id: 2,
      },
    },
  ];

  /**
   * The Example rows above can have its column data looking thus.
   */
  var columns = [
    {
      field: "",
      use: "Tên Khóa Học",
      //Will not be used in search filtering
      use_in_search: false,
    },
    {
      field: "",
      use: "Hình Ảnh",
    },
    {
      field: "",
      use: "Mô Tả",
    },
    {
      field: "country_id",
      use: "Lượt Xem",

      //Will not be displayed in the table
      use_in_display: false,
    },
    {
      field: "club_id",
      use: "Người Tạo",
      //would not be exported as a CSV column
      use_in_export: false,
    },
    {
      field: "",
      use: "Ngày Tạo",
    },
  ];

  return (
    <div>
      <Table columns={columns} rows={rows} />
      <AddCourseModal />
    </div>
  );
};

export default Course;
