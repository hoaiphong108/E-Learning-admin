import { baseService } from "./baseService";
import { CODE_GROUP } from "./../util/settings/config";

export class CourseService extends baseService {
    constructor() {
        super();
    }

    addCourse = (dataRequest) =>
        this.post(`api/QuanLyKhoaHoc/ThemKhoaHoc`, dataRequest);

    updateCourse = (dataRequest) =>
        this.put(`api/QuanLyKhoaHoc/CapNhatKhoaHoc`, dataRequest);

    deleteCourse = (maKhoaHoc) =>
        this.delete(`api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);

    getCourseList = (dataRequest = "") =>
        this.get(
            `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${CODE_GROUP}&tenKhoaHoc=${dataRequest}`
        );

    registCourse = (dataRequest) => {
        this.post(`api/QuanLyKhoaHoc/GhiDanhKhoaHoc`, dataRequest);
    };

    unRegistCourse = (dataRequest) => {
        this.post(`api/QuanLyKhoaHoc/HuyGhiDanh`, dataRequest);
    };

    uploadImage = () => this.post("api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc");
}

export const courseService = new CourseService();