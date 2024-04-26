const Sequelize = require('sequelize');
const sequelize = new Sequelize('testeNode','rodrigo','rudr1gu', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log('Falha ao se conectar'+ erro)
})

const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: "um titulo qualquer",
//     conteudo: "conteudo qualquer"
// })

// Postagem.sync({force: true})

const Usuarios = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuarios.create({
    nome: "rudr1gu",
    sobre: "santos",
    idade: 13,
    email: "rodrigo.santo@gmail.com"
})

// Usuarios.sync({force: true})