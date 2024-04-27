const db = require('./db')

const Post = db.sequelize.define('Redes',{
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    bio: {
        type: db.Sequelize.TEXT
    },
    fb: {
        type: db.Sequelize.STRING
    },
    insta: {
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