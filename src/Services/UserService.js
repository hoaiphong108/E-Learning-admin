import { baseService } from "./baseService";

export class UserService extends baseService {
    constructor() {
        super();
    }
    signIn = (thongTinDangNhap) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    };
}

export const userService = new UserService();