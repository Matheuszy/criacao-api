import expresss from "express";
import AutorController from "../Controller/autorController.js";

const routes = expresss.Router();
routes.get("/autores", AutorController.listarAutor);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletarAutor);

export default routes;