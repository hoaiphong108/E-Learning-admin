import { baseService } from "./baseService";

export class UserService extends baseService {
    constructor() {
        super();
    }
}

export const userService = new UserService();