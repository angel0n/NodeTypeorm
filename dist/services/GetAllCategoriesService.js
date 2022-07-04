"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoriesService = void 0;
const data_source_1 = require("../database/data-source");
const Category_1 = require("../entities/Category");
class GetAllCategoriesService {
    async execute() {
        const repo = data_source_1.AppDataSource.getRepository(Category_1.Category);
        const categories = await repo.find();
        return categories;
    }
}
exports.GetAllCategoriesService = GetAllCategoriesService;
