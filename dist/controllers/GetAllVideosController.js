"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVideosController = void 0;
const GetAllVideosService_1 = require("../services/GetAllVideosService");
class GetAllVideosController {
    async handle(request, response) {
        const service = new GetAllVideosService_1.GetAllVideosService();
        const videos = await service.execute();
        //@ts-ignore
        return response.json(videos);
    }
}
exports.GetAllVideosController = GetAllVideosController;
