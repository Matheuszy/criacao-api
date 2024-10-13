import express from "express";
import conectaBancoDeDados from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaBancoDeDados();

conexao.on('error', (error) => {
    console.error('erro de conexão', error);
});

conexao.once('open', () => {
    console.log("conexão bem sucedida");
    
});

const app = express();
routes(app);

export default app;