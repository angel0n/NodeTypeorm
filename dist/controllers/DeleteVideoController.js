"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVideoController = void 0;
const DeleteVideosServices_1 = require("../services/DeleteVideosServices");
class DeleteVideoController {
    async handle(request, response) {
        //@ts-ignore
        const { id } = request.params;
        const service = new DeleteVideosServices_1.DeleteVideosServices();
        const result = await service.execute(id);
        if (result instanceof Error) {
            //@ts-ignore
            return response.status(400).json(result.message);
        }
        //@ts-ignore
        return response.status(204).end();
    }
}
exports.DeleteVideoController = DeleteVideoController;
