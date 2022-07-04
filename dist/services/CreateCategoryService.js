"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const data_source_1 = require("../database/data-source");
const Category_1 = require("../entities/Category");
class CreateCategoryService {
    async execute({ name, description }) {
        const repo = data_source_1.AppDataSource.getRepository(Category_1.Category);
        if (await repo.findOne({ where: { name } })) {
            return new Error("Category already exists");
        }
        const category = repo.create({
            name,
            description
        });
        await repo.save(category);
        return category;
    }
}
exports.CreateCategoryService = CreateCategoryService;
