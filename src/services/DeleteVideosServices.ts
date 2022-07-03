import { AppDataSource } from "../database/data-source";
import { Videos } from "../entities/Videos";

export class DeleteVideosServices{
    async execute(id: string){
        const repo = AppDataSource.getRepository(Videos)

        const video = await repo.findOne({where:{id}})

        if(!video){
            return new Error("Videos does not exist")
        }

        await repo.delete({id})
    }
}