const express = require("express");
const app = express();
const Post = require('./models/Post');
const path = require('path');

// Servindo arquivos estáticos da pasta 'view' e 'controllers'
app.use('/view', express.static(path.join(__dirname, 'view')));
app.use('/controllers', express.static(path.join(__dirname, 'controllers')));


//body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//rotas
app.get("/", function(req, res){
    res.sendFile(__dirname +'/index.html')
})

app.get('/cadastro', function(req, res){
    res.sendFile(__dirname + '/formulario.html');
})

app.post('/add', function(req, res){
    Post.create({
        nome: req.body.name,
        email: req.body.contato,
        bio: req.body.bio,
        fb: req.body.facebook,
        insta: req.body.instagram,
        spotify: req.body.spoti,
        linkedin: req.body.linkedin
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("erro: " + erro)
    })
})


app.listen(7200, function(){
    console.log("servidor rodando!")
});
