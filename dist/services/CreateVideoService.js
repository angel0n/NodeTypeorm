"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVideoService = void 0;
const data_source_1 = require("../database/data-source");
const Category_1 = require("../entities/Category");
const Videos_1 = require("../entities/Videos");
class CreateVideoService {
    async execute({ name, description, duration, category_id }) {
        const repo = data_source_1.AppDataSource.getRepository(Videos_1.Videos);
        const repoCategory = data_source_1.AppDataSource.getRepository(Category_1.Category);
        if (!(await repoCategory.findOne({ where: { id: category_id } }))) {
            return new Error("Category does not exists!");
        }
        const video = repo.create({ name, description, duration, category_id });
        await repo.save(video);
        return video;
    }
}
exports.CreateVideoService = CreateVideoService;
