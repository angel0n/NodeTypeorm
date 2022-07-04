"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVideosService = void 0;
const data_source_1 = require("../database/data-source");
const Videos_1 = require("../entities/Videos");
class GetAllVideosService {
    async execute() {
        const repo = data_source_1.AppDataSource.getRepository(Videos_1.Videos);
        const videos = repo.find({
            relations: ["category"]
        });
        return videos;
    }
}
exports.GetAllVideosService = GetAllVideosService;
