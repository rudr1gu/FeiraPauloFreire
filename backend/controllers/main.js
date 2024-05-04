document.addEventListener("DOMContentLoaded", function() {
    let botoes = document.querySelectorAll(".inte");
    botoes.forEach((botao) => {
        botao.addEventListener("click", function() {
            imprimirValor(this);
        });
    });
});
   
function imprimirValor(botao) {
    let resultado = document.getElementById('res')
    let valor = botao.innerHTML;
    
    botao.disabled = true;
    console.log(valor);
    resultado.innerHTML += valor;
}