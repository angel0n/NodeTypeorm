import { AppDataSource } from "../database/data-source";
import { Category } from "../entities/Category";

export class DeleteCategoryServices{
    async execute(id:string){
        const repo = AppDataSource.getRepository(Category)

        if(!await repo.findOne({where:{id}})){
            return new Error("Category does not ecists!")
        }

        await repo.delete({id})
    }
}