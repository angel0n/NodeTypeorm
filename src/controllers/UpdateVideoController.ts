import { UpdateVideosService } from "../services/UpdateVideosService"

export class UpdateVideoController{
    async handle(request:Request, response:Response){
        //@ts-ignore
        const {name,description,category_id,duration} = request.body
        //@ts-ignore
        const {id} = request.params
        
        const service = new UpdateVideosService()

        const result = await service.execute({id,name,description,category_id,duration})

        if(result instanceof Error){
            //@ts-ignore
            return response.status(404).json(result.message)
        }
        //@ts-ignore
        return response.json(result)
    }
}