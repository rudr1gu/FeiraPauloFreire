# Oficina de Introdução ao Desenvolvimento Web
Descrição do Projeto
Este projeto foi desenvolvido com o objetivo de oferecer uma oficina para pessoas que nunca tiveram contato com desenvolvimento web. A ideia é proporcionar uma breve noção das tecnologias utilizadas na estrutura (HTML5) e no design (CSS3).

## Funcionalidades
- No decorrer da oficina, os participantes irão:

- Preencher um Formulário de Dados Pessoais: Os usuários irão inserir informações pessoais como nome, biografia e redes sociais.

- Gerar um Cartão de Visita: Ao clicar no botão "Enviar", será gerada uma página contendo os dados inseridos, funcionando como um cartão de visita.

- Edição do Cartão de Visita: Os usuários terão a possibilidade de editar a página do cartão, proporcionando uma experiência prática com as tecnologias HTML e CSS, permitindo uma melhor compreensão de como estruturar e personalizar uma página web.

## Tecnologias Utilizadas
- HTML5: Utilizado para estruturar a página e o formulário de dados pessoais.
- CSS3: Utilizado para estilizar a página, proporcionando um design agradável e responsivo.
- JavaScript: Utilizado para adicionar interatividade à página, como validações de formulário e manipulação de eventos.
- Node.js: Ambiente de execução para JavaScript no servidor, utilizado para construir a lógica de backend.
- Express: Framework para Node.js, utilizado para gerenciar rotas e facilitar o desenvolvimento do servidor.
- Sequelize: ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o banco de dados de maneira mais intuitiva.
- Handlebars: Motor de templates utilizado para gerar HTML dinâmico de forma eficiente e organizada.

## Objetivos Educacionais
A oficina tem como objetivos principais:

Introduzir os conceitos básicos de HTML5 e CSS3.
Demonstrar de forma prática como essas tecnologias são aplicadas na criação de páginas web.
Incentivar os participantes a explorar e personalizar suas próprias páginas, promovendo um entendimento prático e intuitivo.

## Instalação

- Instale com npm

```bash
    git clone https://github.com/Rudr1gu/FeiraPauloFreire.git
    cd FeiraPauloFreire/src
    npm install
```
### Configure o banco de Dados:
- Entre na pasta models no arquivo db.js insira o nome do seu usuario do mysql e a sua senha de acesso.
```bash
    const sequelize = new Sequelize('portifolio','nomeUsuario','senhaUsuario', {
    host: "localhost",
    dialect: "mysql"
})
```
- Crie um banco de dados com o nome "portifolio" no mySQL

```bash
     create database portifolio;
```

- Ainda na pasta models entre no arquivo Post.js e na linha 53 remova o comentário da função Post.sync

```bash
    Post.sync({force: true})
```

- Pelo cmd entre na pasta models e execute o arquivo Post.js

```bash
    cd models
    node Post.js
```

- Ao rodar esse comando ira criar uma tabela no seu banco de dados, para finalizar vlte no arquivo Post.js e na linha 53 comente novamente o comando:

```bash
    //Post.sync({force: true})
```
 ### Ligando o Localhost

- No cmd entre na pasta src/ e use o comando:
```bash
    node index.js
```

- Acesse o localhost:7200/cadastro no seu browser

## Autores

- [@rudr1gu](https://www.github.com/rudr1gu)
- [@cizok](https://github.com/Cizok)
- [@eduardaserapili](https://github.com/EduardaSerapili)
- [@djair](https://github.com/djair2113)
- [@t4vzz](https://github.com/t4vzz)
- [@vannucchi10](https://github.com/vannucchi10)
- [@J](https://github.com/Chingubiso890)
- [@richard2110](https://github.com/Richard2110)