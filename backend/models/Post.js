const db = require('./db')

const Post = db.sequelize.define('portifolio',{
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
    youtube:{
        type: db.Sequelize.STRING
    },
    spotify: {
        type: db.Sequelize.STRING
    },
    linkedin: {
        type: db.Sequelize.STRING
    }
})

// Post.sync({force: true})

module.exports = Post;