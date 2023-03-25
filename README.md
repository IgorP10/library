# Projeto de um CRUD numa biblioteca com NodeJS, Express e Mongoose
Esse projeto é um exemplo de como utilizar o NodeJS em conjunto com o Express e o Mongoose para criar uma API RESTful que se comunica com um banco de dados MongoDB.

# Dependências
- NodeJS (versão 12 ou superior)
- Express (versão 4.18.2 ou superior)
- Mongoose (versão 7.0.1 ou superior)

# Instalação
Para instalar as dependências do projeto, utilize o seguinte comando:

```powershell>
npm install
```

Copie e edite o arquivo .env
```powershell>
cp env.example .env
```

# Utilização
Para iniciar o servidor, utilize o seguinte comando:

```powershell>
npm run dev
```

Com o servidor em execução, é possível utilizar as seguintes rotas:

### Rota de Livros

```shell$
localhost:3000/books
```

- GET /books: Retorna todos os livros cadastrados no banco de dados.


- POST /books: Cadastra um novo livro no banco de dados. É necessário enviar um JSON no seguinte formato:

```json
{
  "title": "Curso de Node",
  "author": "641cec01ecbee300604dd03b",
  "publisher": "Pereira",
  "numberPages": 115
}
```

- GET /books/:id: Retorna as informações do livro com o ID especificado na URL.
```shell$
http://localhost:3000/books/641ce761b96daff13ef22c4f
```

- PUT /books/:id: Atualiza as informações do livro com o ID especificado na URL. É necessário enviar um JSON no seguinte formato:

```json
{
  "publisher": "Casa do código"
}
```

- DELETE /books/:id: Remove o livro com o ID especificado na URL.

### Rota de Autores

```shell$
localhost:3000/authors
```

- GET /authors: Retorna todos os autores cadastrados no banco de dados.


- POST /authors: Cadastra um novo autor no banco de dados. É necessário enviar um JSON no seguinte formato:

```json
{
  "name": "igor Pereira",
  "nationality": "Brazilian"
}
```

- GET /authors/:id: Retorna as informações do autor com o ID especificado na URL.
```shell$
http://localhost:3000/authors/641cebb7ecbee300604dd035
```

- PUT /authors/:id: Atualiza as informações do autor com o ID especificado na URL. É necessário enviar um JSON no seguinte formato:

```json
{
  "nationality": "Brasileiro"
}
```

- DELETE /authors/:id: Remove o autor com o ID especificado na URL.


# Contribuição
Contribuições são sempre bem-vindas! Se você encontrou algum bug ou tem alguma sugestão de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

# Licença
Esse projeto está sob a licença ISC. Consulte o arquivo LICENSE para mais informações.