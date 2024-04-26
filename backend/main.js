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

    if(nome.length === 0){
        alert("[ERRO] Preencha o campo nome.")
    }
    else if(contato.length === 0){
        alert("[ERRO] Preencha o campo e-mail.")
    }
    else if(bio.length === 0){
        alert("[ERRO] Preencha o campo Biografia.")
    }
    else{
        let cadastro = [nome, contato, bio, fb, insta, spoti, linkedin];
        console.log(cadastro);
    }

    return false;
})