const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post');
const path = require('path');

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

// Servindo arquivos estáticos da pasta 'views' e 'controllers' 
app.use(express.static(path.join(__dirname, 'views')));
app.use('/views', express.static(path.join(__dirname,'views')));
app.use('/controllers', express.static(path.join(__dirname, 'controllers')));


//rotas
app.get("/", function(req, res){
    Post.findAll({
        order: [['createdAt', 'DESC']], // Ordena os posts
        limit: 1 // Limita resultado
    }).then(function(posts){
        res.render('index', {posts: posts})
    }).catch(function(e){
        console.log("erro" + e)
        res.status(500).send("erro ao carregar os posts ")
    })
})

app.get('/cadastro', function(req, res){
    res.sendFile(__dirname + '/formulario.html');
})

app.post('/add', function(req, res){
    Post.create({
        nome: req.body.name,
        email: req.body.contato,
        biografia: req.body.bio,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        youtube: req.body.youtube,
        spotify: req.body.spoti,
        linkedin: req.body.linkedin
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        console.log("Erro: " + erro)
        res.status(500).send("erro ao carregar")
    })
})


app.listen(7200, function(){
    console.log("servidor rodando na porta 7200")
});
