"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryService = void 0;
const data_source_1 = require("../database/data-source");
const Category_1 = require("../entities/Category");
class UpdateCategoryService {
    async execute({ id, name, description }) {
        const repo = data_source_1.AppDataSource.getRepository(Category_1.Category);
        const category = await repo.findOne({ where: { id } });
        if (!category) {
            return new Error("Category does not exists!");
        }
        category.name = name ? name : category.name;
        category.description = description ? description : category.description;
        await repo.save(category);
        return category;
    }
}
exports.UpdateCategoryService = UpdateCategoryService;
