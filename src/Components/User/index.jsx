import React, { useState } from "react";
import Table from "react-tailwind-table";
import { useSelector, useDispatch } from "react-redux";

// Style
import "react-tailwind-table/dist/index.css";

// Redux
import { deleteCourse, showEditModal } from "../../Redux/Actions/CourseAction";
import { createAction } from "../../Redux/Actions";
import {
  ADD_USER_MODAL,
  EDIT_USER_MODAL,
} from "../../Redux/Actions/Types/UserType";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";
import { deleteUserAction } from "../../Redux/Actions/UserAction";

const User = () => {
  const dispatch = useDispatch();

  const listUser = useSelector((state) => {
    return state.user.listUser;
  });
  const showAddModal = () => {
    dispatch(createAction(ADD_USER_MODAL, true));
  };

  const showEditModal = () => {
    dispatch(createAction(EDIT_USER_MODAL, true));
  };

  const rowRender = (row, column) => {
    if (column.field === "action") {
      return (
        <div className="text-center">
          <button
            className="py-3 text-xl text-white bg-green-600 rounded-lg"
            onClick={() => {
              showEditModal();
            }}
          >
            Sửa
          </button>
          <button
            className="py-3 text-white bg-red-600 rounded-lg"
            onClick={() => {
              const action = deleteUserAction(listUser.taiKhoan);
              dispatch(action);
            }}
          >
            Xóa
          </button>
        </div>
      );
    }
  };

  const rows = listUser;

  const columns = [
    {
      field: "taiKhoan",
      use: "Tài Khoản",
    },
    {
      field: "hoTen",
      use: "Họ tên",
    },
    {
      field: "email",
      use: "email",
    },
    {
      field: "soDt",
      use: "số DT",
    },
    {
      field: "maLoaiNguoiDung",
      use: "Mã Loại Người Dùng",
    },

    {
      field: "action",
      use: "Action",
    },
  ];

  return (
    <div className="overflow-y-auto">
      <div className="text-right">
        <button
          className="py-2 px-4 text-xl text-purple-600 hover:bg-purple-600 hover:text-white"
          onClick={() => {
            showAddModal();
          }}
        >
          Thêm Người dùng
        </button>
      </div>
      <Table columns={columns} rows={rows} row_render={rowRender} />
      <AddUserModal />
      <EditUserModal />
    </div>
  );
};

export default User;
