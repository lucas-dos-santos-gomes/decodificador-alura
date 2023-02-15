let botoes = document.querySelectorAll("li");
botoes.forEach(e => {
    e.addEventListener("mouseover", function(evento){
        let classeBotao = evento.toElement.classList[0];
        if(classeBotao == "botao1"){
            botoes[1].classList.toggle("transparente");
            console.log(botoes[1].classList);
        } else if(classeBotao == "botao2"){
            botoes[0].classList.toggle("transparente");
        }
    });

    e.addEventListener("mouseout", () => {
        if(botoes[0].classList.contains("transparente")){
            botoes[0].classList.toggle("transparente");
        } else if (botoes[1].classList.contains("transparente")){
            botoes[1].classList.toggle("transparente");
        }
    });
});