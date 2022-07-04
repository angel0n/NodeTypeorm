"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVideosServices = void 0;
const data_source_1 = require("../database/data-source");
const Videos_1 = require("../entities/Videos");
class DeleteVideosServices {
    async execute(id) {
        const repo = data_source_1.AppDataSource.getRepository(Videos_1.Videos);
        const video = await repo.findOne({ where: { id } });
        if (!video) {
            return new Error("Videos does not exist");
        }
        await repo.delete({ id });
    }
}
exports.DeleteVideosServices = DeleteVideosServices;
