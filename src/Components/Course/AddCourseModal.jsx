import { Fragment, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { useFormik } from "formik";

// Redux
import {
  addCourseToList,
  addCourseToListAction,
  showCreateModal,
} from "../../Redux/Actions/CourseAction";

export default function AddCourseModal(props) {
  const dispatch = useDispatch();

  const [imgSrc, setImgSrc] = useState(
    "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
  );

  const showCreateCourseModal = useSelector((state) => {
    return state.course.showCreateCourseModal;
  });

  const handleHideModal = () => {
    dispatch(showCreateModal(false));
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

      console.log("file", file);

      formik.setValues("hinhAnh", file);
    }
  };

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: parseInt(0),
      danhGia: parseInt(0),
      hinhAnh: "",
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },
    onSubmit: useCallback((values) => {
      dispatch(addCourseToListAction(values));

      handleHideModal();
    }, []),
  });

  return (
    <Transition.Root show={showCreateCourseModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleHideModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="text-2xl text-center font-bold">T???o kh??a h???c</h3>
                <form
                  className="pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="grid grid-cols-1">
                    <div>
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        M?? Kh??a H???c
                      </label>
                      <input
                        onChange={formik.handleChange}
                        name="maKhoaHoc"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="M?? Kh??a H???c"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        T??n Kh??a H???c
                      </label>
                      <input
                        onChange={formik.handleChange}
                        name="tenKhoaHoc"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="T??n Kh??a H???c"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        M?? T???
                      </label>
                      <textarea
                        onChange={formik.handleChange}
                        name="moTa"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="T??n Kh??a H???c"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Link h??nh ???nh
                      </label>
                      <input
                        onChange={hanldeChangeFile}
                        onChange={formik.handleChange}
                        name="hinhAnh"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="file"
                        required
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
                          L?????t xem
                        </label>
                        <input
                          onChange={formik.handleChange}
                          name="luotXem"
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="L?????t xem"
                          required
                        />
                      </div>
                      <div className="col-6 mt-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          M?? Nh??m
                        </label>
                        <input
                          onChange={formik.handleChange}
                          name="maNhom"
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="GP01-GP07"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        M?? Danh M???c Kh??a H???c
                      </label>
                      <input
                        onChange={formik.handleChange}
                        name="maDanhMucKhoaHoc"
                        required
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="M?? Danh M???c Kh??a H???c"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        ????nh gi??
                      </label>
                      <input
                        onChange={formik.handleChange}
                        name="danhGia"
                        required
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="????nh gi??"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        T??i Kho???n Ng?????i T???o
                      </label>
                      <input
                        onChange={formik.handleChange}
                        name="taiKhoanNguoiTao"
                        required
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="T??i Kho???n Ng?????i T???o"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        B?? Danh
                      </label>
                      <input
                        onChange={formik.handleChange}
                        name="biDanh"
                        required
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="B?? Danh"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Ng??y T???o
                    </label>
                    <input
                      onChange={formik.handleChange}
                      name="ngayTao"
                      required
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="Ng??y T???o"
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
                      H???y
                    </button>
                    <button
                      type="submit"
                      className="rounded-md border border-gray-300 shadow-sm px-4 py-1.5 ml-4 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Th??m
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
