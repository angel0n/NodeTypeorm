import { CreateVideoService } from "../services/CreateVideoService"

export class CreateVideoController{
    async handle(request: Request, response: Response){
        //@ts-ignore
        const { name, description, duration, category_id} = request.body

        const service = new CreateVideoService()

        const result = await service.execute({
            name,
            description,
            category_id,
            duration
        })

        if(result instanceof Error){
            //@ts-ignore
            return response.status(400).json(result.message)
        }

        //@ts-ignore
        return response.json(result)
    }
}