import { CreateCategoryService } from "../services/CreateCategoryService"


export class CreateCategoryController{
    async handle(request: Request,response:Response){
        //@ts-ignore
        const { name, description} = request.body

        const service = new CreateCategoryService()

        const result = await service.execute({name, description})

        if(result instanceof Error){
            //@ts-ignore
            return response.status(400).json(result.message)
        }
        //@ts-ignore
        return response.json(result)
    }
}