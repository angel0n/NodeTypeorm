"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategories1656775269317 = void 0;
const typeorm_1 = require("typeorm");
class CreateCategories1656775269317 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "categories",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("categories");
    }
}
exports.CreateCategories1656775269317 = CreateCategories1656775269317;
