import { autor } from "../models/Autor.js";

class AutorController {
    static async listarAutor (req, res) {

        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);

        } catch(error) {
            res.status(500).json({ message: `${erro.message} - falha ao buscar o autor`})
        }

    };

    static async listarAutorPorId (req, res) {

        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);

        } catch(error) {
            res.status(500).json({ message: `${error.message} - falha na busca do autor`})
        }

    };

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "criado com sucesso",
                livro: novoAutor
            });
        } catch(error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar o autor`})
        };

    };

    static async atualizarAutor (req, res) {

        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(201).json({message: "Autor atualizado"});

        } catch(error) {
            res.status(500).json({ message: `${error.message} - falha na atualização`})
        }

    };

    static async deletarAutor (req, res) {

        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(204).json({message: "Autor deletado com sucesso"});

        } catch(error) {
            res.status(500).json({ message: `${error.message} - falha na exclusão do autor`})
        }

    };

};

export default AutorController;
