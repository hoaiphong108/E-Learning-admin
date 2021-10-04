import { baseService } from "./baseService";
import { CODE_GROUP } from "./../util/settings/config";

export class CourseService extends baseService {
  constructor() {
    super();
  }

  getCourseList = (dataRequest = "") =>
    this.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${CODE_GROUP}&tenKhoaHoc=${dataRequest}`
    );
}

export const courseService = new CourseService();
