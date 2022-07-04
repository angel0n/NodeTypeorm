"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryController = void 0;
const UpdateCategoryService_1 = require("../services/UpdateCategoryService");
class UpdateCategoryController {
    async handle(request, response) {
        //@ts-ignore
        const { id } = request.params;
        //@ts-ignore
        const { name, description } = request.body;
        const service = new UpdateCategoryService_1.UpdateCategoryService();
        const result = await service.execute({ id, name, description });
        if (result instanceof Error) {
            //@ts-ignore
            return response.status(400).json(result.message);
        }
        //@ts-ignore
        return response.json(result);
    }
}
exports.UpdateCategoryController = UpdateCategoryController;
