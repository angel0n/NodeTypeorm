"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const CreateCategoryService_1 = require("../services/CreateCategoryService");
class CreateCategoryController {
    async handle(request, response) {
        //@ts-ignore
        const { name, description } = request.body;
        const service = new CreateCategoryService_1.CreateCategoryService();
        const result = await service.execute({ name, description });
        if (result instanceof Error) {
            //@ts-ignore
            return response.status(400).json(result.message);
        }
        //@ts-ignore
        return response.json(result);
    }
}
exports.CreateCategoryController = CreateCategoryController;
