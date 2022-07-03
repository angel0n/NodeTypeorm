import { AppDataSource } from "../database/data-source";
import { Category } from "../entities/Category";
import { Videos } from "../entities/Videos";

type VideoUpdateRequest = {
    id:string;
    name:string;
    description:string;
    duration:number;
    category_id:string;
}
export class UpdateVideosService{
    async execute({id,name,description,duration,category_id}:VideoUpdateRequest){
        const repo = AppDataSource.getRepository(Videos)

        if(category_id){
            const repoCategory = AppDataSource.getRepository(Category)

            if(!(await repoCategory.findOne({where:{id:category_id}}))){
                return new Error("Category does not exists!")
            }
        }

        const video = await repo.findOne({where:{id}})

        if(!video){
            return new Error("Videos does not exist!")
        }

        video.name = name ? name : video.name
        video.description = description ? description : video.description
        video.category_id = category_id ? category_id : video.category_id
        video.duration = duration ? duration : video.duration

        await repo.save(video)

        return video    
    }
}