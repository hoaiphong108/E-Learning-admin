import { baseService } from "./baseService";

export class UserService extends baseService {
  constructor() {
    super();
  }

  signIn = (thongTinDangNhap) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  unRegistCourseUserList = (courseCodeName) =>
    this.post(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`,
      courseCodeName
    );
}

export const userService = new UserService();
