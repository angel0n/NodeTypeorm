import { DeleteCategoryServices } from "../services/DeleteCategoryService";

 export class DeleteCategoryController{
    async handle(request:Request,response:Response){
        //@ts-ignore
        const { id } = request.params;

        const service = new DeleteCategoryServices()

        const result = service.execute(id)

        if(result instanceof Error){
            //@ts-ignore
            return response.status(400).json(result.message)
        }

        //@ts-ignore
        return response.status(204).end()
    }
 }