import { CODE_GROUP } from "../util/settings/config";
import { baseService } from "./baseService";

export class UserService extends baseService {
    constructor() {
        super();
    }
    signIn = (thongTinDangNhap) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    };
    getInfoUser = () => {
        return this.get(
            `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${CODE_GROUP}`
        );
    };
    unRegistCourseUserList = (courseCodeName) =>
        this.post(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`,
      courseCodeName
    );
    addUser = (thongTinNguoiDung) => {
        return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung);
    };
    deleteUser = (taiKhoan) => {
        return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    };
    updateUser = (thongTinNguoiDung) => {
        return this.put(
            `api/QuanLyNguoiDung/CapNhatThongTinNguoiDung
        `,
            thongTinNguoiDung
        );
    };
    findUserByName = (tuKhoa) => {
        return this.get(
            `api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${CODE_GROUP}&tuKhoa=${tuKhoa}`
        );
    };
}

export const userService = new UserService();
