import { baseService } from "./baseService";
import { CODE_GROUP } from "../util/settings/config";

export class CourseService extends baseService {
  constructor() {
    super();
  }

  getCourseList = (courseName = "") =>
    this.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${courseName}&MaNhom=${CODE_GROUP}`
    );
}

export const courseService = new CourseService();
