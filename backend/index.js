const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post');
const path = require('path');

// Servindo arquivos estáticos da pasta 'view' e 'controllers' 
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use('/controllers', express.static(path.join(__dirname, 'controllers')));
app.use('/view/img', express.static(path.join(__dirname, 'img')));

// Configurando o Handlebars como mecanismo de template
app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},
}))
app.set('view engine', 'handlebars')


//body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//rotas
app.get("/", function(req, res){
    Post.findAll({
        order: [['createdAt', 'DESC']], // Ordena os posts
        limit: 1 // Limita resultado
    }).then(function(posts){
        res.render('index', {posts: posts})
    }).catch(function(e){
        console.log("erro" + e)
    })
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
