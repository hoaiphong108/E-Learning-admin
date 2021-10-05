import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Redux store
import { findUserByNameAction } from "../../Redux/Actions/UserAction";

const SearchBox = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleSearchUser = () => {
    const dataRequest = {
      tuKhoa: searchValue,
    };

    dispatch(findUserByNameAction(dataRequest.tuKhoa));
  };

  return (
    <form
      action="/"
      onSubmit={(event) => {
        event.preventDefault();
        handleSearchUser();
      }}
      className="relative"
    >
      <button
        type="submit"
        className="text-gray-500 absolute left-2 top-2 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
      <input
        className="form-input w-96 pl-10 pr-4 focus:border-indigo-600 focus:outline-none focus:ring-2"
        type="text"
        placeholder="Tìm kiếm người dùng theo tên"
        name="searchInput"
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBox;
