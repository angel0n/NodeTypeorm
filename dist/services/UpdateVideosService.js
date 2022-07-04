"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVideosService = void 0;
const data_source_1 = require("../database/data-source");
const Category_1 = require("../entities/Category");
const Videos_1 = require("../entities/Videos");
class UpdateVideosService {
    async execute({ id, name, description, duration, category_id }) {
        const repo = data_source_1.AppDataSource.getRepository(Videos_1.Videos);
        if (category_id) {
            const repoCategory = data_source_1.AppDataSource.getRepository(Category_1.Category);
            if (!(await repoCategory.findOne({ where: { id: category_id } }))) {
                return new Error("Category does not exists!");
            }
        }
        const video = await repo.findOne({ where: { id } });
        if (!video) {
            return new Error("Videos does not exist!");
        }
        video.name = name ? name : video.name;
        video.description = description ? description : video.description;
        video.category_id = category_id ? category_id : video.category_id;
        video.duration = duration ? duration : video.duration;
        await repo.save(video);
        return video;
    }
}
exports.UpdateVideosService = UpdateVideosService;
