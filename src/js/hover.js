const botoes = document.querySelectorAll("li");
const botaoCopiar = document.querySelector(".botao-copiar");

function botoesTransparentes(){
    for(let i = 0; i < botoes.length; i++){
        botoes[i].classList.toggle("transparente");
    }
}

botaoCopiar.addEventListener("mouseover", botoesTransparentes);
botaoCopiar.addEventListener("mouseout", botoesTransparentes);

botoes.forEach(e => {
    e.addEventListener("mouseover", function(evento){
        let classeBotao = evento.toElement.classList[0];
        if(classeBotao == "botao1"){
            botoes[1].classList.toggle("transparente");
            botaoCopiar.classList.toggle("transparente");
        } else if(classeBotao == "botao2"){
            botoes[0].classList.toggle("transparente");
            botaoCopiar.classList.toggle("transparente");
        } else if(classeBotaoCopiar == "botao-copiar"){
            botoes[0].classList.toggle("transparente");
            botoes[1].classList.toggle("transparente");
        }
    });

    e.addEventListener("mouseout", () => {
        if(botoes[0].classList.contains("transparente")){
            botoes[0].classList.toggle("transparente");
            botaoCopiar.classList.toggle("transparente");
        } else if (botoes[1].classList.contains("transparente")){
            botoes[1].classList.toggle("transparente");
            botaoCopiar.classList.toggle("transparente");
        }
    });
});