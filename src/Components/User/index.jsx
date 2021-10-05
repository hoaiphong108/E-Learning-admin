import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import UserList from "./UserList";
import SearchBox from "./SearchBox";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";

// Redux
import { createAction } from "../../Redux/Actions";
import {
  ADD_USER_MODAL,
  EDIT_USER_MODAL,
} from "../../Redux/Actions/Types/UserType";
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

  const data = React.useMemo(() => listUser);

  const columns = React.useMemo(() => [
    {
      Header: "Tài Khoản",
      accessor: "taiKhoan",
    },
    {
      Header: "Họ tên",
      accessor: "hoTen",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Số DT",
      accessor: "soDt",
    },
    {
      Header: "Mã Loại Người Dùng",
      accessor: "maLoaiNguoiDung",
      width: 170,
      minWidth: 170,
    },
    {
      Header: "Action",
      accessor: "action",
      width: 110,
      minWidth: 110,
      Cell: ({ cell: { value } }) => (
        <div style={{ minWidth: 100 }} className="text-center">
          <button
            className="border-2 rounded p-1 border-green-500 hover:border-green-700 text-green-500 hover:text-green-700"
            onClick={() => {
              showEditModal();
            }}
          >
            Sửa
          </button>
          <button
            className="border-2 rounded p-1 border-red-500 hover:border-red-700 text-red-500 hover:text-red-700 ml-2"
            onClick={() => {
              dispatch(deleteUserAction(listUser.map((user) => user.taiKhoan)));
            }}
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
          Danh Sách Người Dùng
        </h4>
        <div className="flex justify-between items-center mb-4">
          <SearchBox />
          <button
            className="border-2 w-40 rounded p-1 border-green-500 hover:border-green-700 text-green-500 hover:text-green-700"
            onClick={() => {
              showAddModal();
            }}
          >
            Thêm
          </button>
        </div>
      </>
      <UserList columns={columns} data={data} />
      <AddUserModal />
      <EditUserModal />
    </>
  );
};

export default User;
