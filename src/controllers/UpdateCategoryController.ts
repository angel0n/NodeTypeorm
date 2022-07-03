import { UpdateCategoryService } from "../services/UpdateCategoryService"

export class UpdateCategoryController{
    async handle(request:Request, response:Response){
        //@ts-ignore
        const {id} = request.params
        //@ts-ignore
        const {name,description} = request.body

        const service = new UpdateCategoryService()

        const result = await service.execute({id,name,description})

        if(result instanceof Error) {
            //@ts-ignore
            return response.status(400).json(result.message)
        }
        
        //@ts-ignore
        return response.json(result)
    }
}