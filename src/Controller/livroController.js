import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js"
import mongoose from "mongoose";

class LivroController {
    static async listarLivros (req, res) {

        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch(error) {
            res.status(500).json({ message: `${error.message} - falha ao buscar um livro`})
        }

    };

    static async listarLivroPorId (req, res) {

        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);

        } catch(error) {
            res.status(500).json({ message: `${error.message} - falha na busca do livro`})
        }

    };

    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({
                message: "criado com sucesso",
                livro: livroCriado
            });
        } catch(error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro`})
        };

    };

    static async atualizarLivro (req, res) {

        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(201).json({message: "Livro atualizado"});

        } catch(error) {
            res.status(500).json({ message: `${error.message} - falha na atualização`})
        }

    };

    static async deletarLivro (req, res) {

        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(204).json({message: "Livro deletado com sucesso"});

        } catch(error) {
            res.status(500).json({ message: `${error.message} - falha na exclusão do livro`})
        }

    };

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;

        try {
            const listarLivrosPorEditora = await livro.find({ editora: editora});
            res.status(200).json(listarLivrosPorEditora);
        } catch(error) {
            res.status(500).json({message: `${error.message} - Falha ao realizar a busca`})
        }
    }

};

export default LivroController;
