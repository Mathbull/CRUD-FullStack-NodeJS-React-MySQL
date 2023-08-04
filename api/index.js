/// 1) ao inicar a aplicação no terminal o aquivo indicado como index.js sera o ponto de partida.

import express  from "express";
import userRoutes from "./routes/users.js"
// importamos a rota que será usada para buscar os dados no banco de dados Mysql

import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes)
/// Estamos defindo uma rota para nossa aplicação. Usando o "userRoutes" para lidar com a solicitação

app.listen(8800);



// 2) 