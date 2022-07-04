"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
/*AppDataSource.initialize().then(() => {
    const app = Express()

    app.use(Express.json())
    app.use(routes)
    app.use(cors())

    app.listen(3000,()=> console.log("Server run "))
})*/
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use((0, cors_1.default)());
app.listen(process.env.PORT || 3000, () => console.log("Server run "));
