import "reflect-metadata";

import  Express  from "express";

import { AppDataSource } from "./database/data-source";
import { routes } from "./routes";

AppDataSource.initialize().then(() => {
    const app = Express()

    app.use(Express.json())
    app.use(routes)

    app.listen(3000,()=> console.log("Server run "))
})

