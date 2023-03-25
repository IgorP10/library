import authors from "../models/Author.js";

class AuthorsController {
    static getAuthors = async (req, res) => {
        try {
            const data = await authors.find({})
            res.status(200).send(data)
        } catch (err) {
            res.status(404).send({message: err.message})
        }
    }

    static getAuthorById = async (req, res) => {
        const id = req.params.id;

        try {
            const data = await authors.findById(id);
            res.status(200).send(data)
        } catch (err) {
            res.status(404).send({message: `${err.message} - ID do livro não encontrado.`})
        }
    }

    static registerAuthor = async (req, res) => {
        let author = authors(req.body);

        try {
            await author.save();

            res.status(201).send(author.toJSON())
        } catch (err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar o livro.`})
        }
    }

    static updateAuthor = async (req, res) => {
        const id = req.params.id;

        try {
            await authors.findByIdAndUpdate(id, {$set: req.body})

            res.status(200).send({message: 'Livro atualizado com sucesso'});
        } catch (err) {
            res.status(500).send({message: `${err.message} - falha ao atualizar o livro.`})
        }
    }

    static deleteAuthor = async (req, res) => {
        const id = req.params.id;

        try {
            await authors.findByIdAndDelete(id);

            res.status(200).send({message: 'Livro removido com sucesso!'})
        } catch (err) {
            res.status(500).send({message: `${err.message} - ID do livro não encontrado.`})
        }
    }
}

export default AuthorsController;