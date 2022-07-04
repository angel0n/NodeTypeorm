"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVideoController = void 0;
const UpdateVideosService_1 = require("../services/UpdateVideosService");
class UpdateVideoController {
    async handle(request, response) {
        //@ts-ignore
        const { name, description, category_id, duration } = request.body;
        //@ts-ignore
        const { id } = request.params;
        const service = new UpdateVideosService_1.UpdateVideosService();
        const result = await service.execute({ id, name, description, category_id, duration });
        if (result instanceof Error) {
            //@ts-ignore
            return response.status(404).json(result.message);
        }
        //@ts-ignore
        return response.json(result);
    }
}
exports.UpdateVideoController = UpdateVideoController;
