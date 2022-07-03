import { DeleteVideosServices } from "../services/DeleteVideosServices";

export class DeleteVideoController{
    async handle(request:Request,response:Response){
         //@ts-ignore
        const {id} = request.params;

        const service = new DeleteVideosServices()

        const result = await service.execute(id)

        if(result instanceof Error){
             //@ts-ignore
            return response.status(400).json(result.message)
        }

         //@ts-ignore
         return response.status(204).end()
    }
}