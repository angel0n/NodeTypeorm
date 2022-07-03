import { AppDataSource } from "../database/data-source";
import { Videos } from "../entities/Videos";

export class GetAllVideosService{
    async execute(){
        const repo = AppDataSource.getRepository(Videos)

        const videos = repo.find({
            relations:["category"]
        })

        return videos
    }
}