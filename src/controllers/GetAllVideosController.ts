import { GetAllVideosService } from "../services/GetAllVideosService";

export class GetAllVideosController{
    async handle(request:Request,response:Response){
        const service = new GetAllVideosService();

        const videos = await service.execute();

        //@ts-ignore
        return response.json(videos);
    }
}