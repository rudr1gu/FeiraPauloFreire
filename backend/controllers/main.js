const btnEnviar = document.getElementById("btnEnviar");

let nome = document.getElementById("iname");
let contato = document.getElementById("icontato");
let bio = document.getElementById("ibio");
let fb = document.getElementById("ifacebook");
let insta = document.getElementById("iinstagram");
let spoti = document.getElementById("ispoti");
let linkedin = document.getElementById("ilinkedin");

btnEnviar.addEventListener('click', ()=>{
    nome = nome.value;
    contato = contato.value;
    bio = bio.value;
    fb = fb.value;
    insta = insta.value;
    spoti = spoti.value;
    linkedin = linkedin.value;

    Usuarios.create({
        nome: nome,
        email: contato,
        bio: bio,
        fb: fb,
        insta: insta,
        spotify: spoti,
        linkedin: linkedin
    })

})