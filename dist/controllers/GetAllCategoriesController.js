"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoriesController = void 0;
const GetAllCategoriesService_1 = require("../services/GetAllCategoriesService");
class GetAllCategoriesController {
    async handle(request, response) {
        const service = new GetAllCategoriesService_1.GetAllCategoriesService();
        const categories = await service.execute();
        //@ts-ignore
        return response.json(categories);
    }
}
exports.GetAllCategoriesController = GetAllCategoriesController;
