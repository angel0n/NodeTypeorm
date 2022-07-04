"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryController = void 0;
const DeleteCategoryService_1 = require("../services/DeleteCategoryService");
class DeleteCategoryController {
    async handle(request, response) {
        //@ts-ignore
        const { id } = request.params;
        const service = new DeleteCategoryService_1.DeleteCategoryServices();
        const result = service.execute(id);
        if (result instanceof Error) {
            //@ts-ignore
            return response.status(400).json(result.message);
        }
        //@ts-ignore
        return response.status(204).end();
    }
}
exports.DeleteCategoryController = DeleteCategoryController;
