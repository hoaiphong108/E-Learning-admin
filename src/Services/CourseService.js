import { baseService } from "./baseService";

export class CourseService extends baseService {
    constructor() {
        super();
    }
}

export const courseService = new CourseService();