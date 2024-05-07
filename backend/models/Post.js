const db = require('./db')

const Post = db.sequelize.define('perfil',{
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    biografia: {
        type: db.Sequelize.TEXT
    },
    facebook: {
        type: db.Sequelize.STRING
    },
    instagram: {
        type: db.Sequelize.STRING
    },
    whatsapp:{
        type: db.Sequelize.STRING
    },
    spotify: {
        type: db.Sequelize.STRING
    },
    linkedin: {
        type: db.Sequelize.STRING
    },
    esporte: {
        type: db.Sequelize.STRING
    },
    musica: {
        type: db.Sequelize.STRING
    },
    filme: {
        type: db.Sequelize.STRING
    },
    series: {
        type: db.Sequelize.STRING
    },
    anime: {
        type: db.Sequelize.STRING
    },
    praia: {
        type: db.Sequelize.STRING
    },
    natureza: {
        type: db.Sequelize.STRING
    }


})

     //Post.sync({force: true})

module.exports = Post;