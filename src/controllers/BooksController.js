import books from "../models/Book.js";

class BooksController {
    static getBooks = async (req, res) => {
        try {
            const data = await books.find().
                populate('author').
                exec();
            res.status(200).send(data);
        } catch (err) {
            res.status(404).send({message: err.message});
        }
    }

    static getBookById = async (req, res) => {
        const id = req.params.id;

        try {
            const data = await books.findById(id).
            populate('author', 'name').
            exec();
            res.status(200).send(data);
        } catch (err) {
            res.status(404).send({message: `${err.message} - ID do livro não encontrado.`});
        }
    }

    static registerBook = async (req, res) => {
        let book = books(req.body);

        try {
            await book.save();

            res.status(201).send(book.toJSON());
        } catch (err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar o livro.`});
        }
    }

    static updateBook = async (req, res) => {
        const id = req.params.id;

        try {
            await books.findByIdAndUpdate(id, {$set: req.body});

            res.status(200).send({message: 'Livro atualizado com sucesso'});
        } catch (err) {
            res.status(500).send({message: `${err.message} - falha ao atualizar o livro.`});
        }
    }

    static deleteBook = async (req, res) => {
        const id = req.params.id;

        try {
            await books.findByIdAndDelete(id);

            res.status(200).send({message: 'Livro removido com sucesso!'});
        } catch (err) {
            res.status(404).send({message: `${err.message} - ID do livro não encontrado.`});
        }
    }

    static getBooksForPublisher = async (req, res) => {
        const publisher = req.query.publisher;

        try {
           const response = await books.find({'publisher': publisher})

            res.status(200).send(response);
        } catch (err) {
            res.status(404).send({message: `${err.message} - Não foram encontrados livros com essa editora.`});
        }

    }
}

export default BooksController;