"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryServices = void 0;
const data_source_1 = require("../database/data-source");
const Category_1 = require("../entities/Category");
class DeleteCategoryServices {
    async execute(id) {
        const repo = data_source_1.AppDataSource.getRepository(Category_1.Category);
        if (!await repo.findOne({ where: { id } })) {
            return new Error("Category does not ecists!");
        }
        await repo.delete({ id });
    }
}
exports.DeleteCategoryServices = DeleteCategoryServices;
