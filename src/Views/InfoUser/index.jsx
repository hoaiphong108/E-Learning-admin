/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserModal from "../../Components/UserModal";

import { createAction } from "../../Redux/Actions";
import { USER_EDIT } from "../../Redux/Actions/Types/UserType";
import { deleteUserAction } from "../../Redux/Actions/UserAction";

export default function InfoUser(props) {
  const listUser = props.listUser || [];
  const dispatch = useDispatch();
  console.log(listUser);
  const tenChucVu = (chucVu) => {
    if (chucVu === "HV") {
      return "Học Viên";
    } else return "Giảng viên";
  };

  const open = useSelector((state) => state.user.open);

  const deleteUser = (taiKhoan) => {
    const action = deleteUserAction(taiKhoan);
    dispatch(action);
  };

  const [showEdit, setShowEdit] = useState(open);
  const handleShowEdit = () => {
    dispatch(createAction("SET_OPEN", !showEdit));
    return setShowEdit(!showEdit);
  };

  return (
    <>
      <div className={`container mx-auto px-6 py-8  `}>
        <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                  <svg
                    className="h-8 w-8 text-white"
                    viewBox="0 0 28 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                      fill="currentColor"
                    />
                    <path
                      d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    {listUser.length}
                  </h4>
                  <div className="text-gray-500"> Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8"></div>
        <div className="flex flex-col mt-8">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Tài Khoản
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Họ tên
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Số diên thoại
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Chức vụ
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                  </tr>
                </thead>
                {listUser.slice(0, 20).map((user) => {
                  return (
                    <tbody className="bg-white">
                      <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">
                                {user.taiKhoan}
                              </div>
                              <div className="text-sm leading-5 text-gray-500">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            {user.hoTen}
                          </div>
                          <div className="text-sm leading-5 text-gray-500">
                            Web dev
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {user.soDt}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {tenChucVu(user.maLoaiNguoiDung)}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <button
                            className="text-red-600 hover:text-red-900 mr-3 font-medium "
                            onClick={() => {
                              deleteUser(user.taiKhoan);
                            }}
                          >
                            Xóa
                          </button>
                          <div
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={() => {
                              handleShowEdit();
                              dispatch(createAction(USER_EDIT, user));
                            }}
                          >
                            Chỉnh sửa
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UserModal />
      </div>
    </>
  );
}
