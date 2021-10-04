import { baseService } from "./baseService";
import { CODE_GROUP } from "./../util/settings/config";

export class CourseService extends baseService {
  constructor() {
    super();
  }

  addCourse = (dataRequest) =>
    this.post(`api/QuanLyKhoaHoc/ThemKhoaHoc`, dataRequest);

  updateCourse = (dataRequest) =>
    this.post(`api/QuanLyKhoaHoc/CapNhatKhoaHoc`, dataRequest);

  deleteCourse = (dataRequest) => this.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc`, dataRequest);
  
  getCourseList = (dataRequest = "") =>
    this.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${CODE_GROUP}&tenKhoaHoc=${dataRequest}`
    );
}

export const courseService = new CourseService();
