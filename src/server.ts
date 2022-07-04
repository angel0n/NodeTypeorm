import "reflect-metadata";

import  Express  from "express";

import { AppDataSource } from "./database/data-source";
import { routes } from "./routes";
import cors from "cors"

/*AppDataSource.initialize().then(() => {
    const app = Express()

    app.use(Express.json())
    app.use(routes)
    app.use(cors())

    app.listen(3000,()=> console.log("Server run "))
})*/

const app = Express()

app.use(Express.json())
app.use(routes)
app.use(cors())

app.listen(process.env.PORT || 3000,()=> console.log("Server run "))
