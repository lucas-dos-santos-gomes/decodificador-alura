const botoesHover = document.querySelectorAll("li");
const botaoCopiarHover = document.querySelector(".botao-copiar");
const textAreaHover = document.querySelector(".area-texto");
const msgAlerta = document.querySelector(".mensagem-alerta");

const caracteresPermitidos = "abcdefghijklmnopqrstuvwxyz \n";
var bloqueiaBotao;
var bloqueia;
var bloqueiaCopiar;

function bloquearCopiar() {
    let mensagemCript = document.querySelector(".mensagem-cript");
    
    if(mensagemCript.value == "<Essa mensagem não possui uma criptografia>") {
        botaoCopiarHover.style.cursor = "not-allowed";
        bloqueiaCopiar = true;
    } else {
        botaoCopiarHover.style.cursor = "pointer";
        bloqueiaCopiar = false;
    }
}

function botoesTransparentes(e) {
    if(!mobile) {
        for(let i = 0; i < botoesHover.length; i++) {
            botoesHover[i].classList.toggle("transparente");
        }
    }

    if(e.type == "mouseout" && window.innerWidth > 768) {
        textAreaHover.focus();
    }

    bloquearCopiar();
}

botaoCopiarHover.addEventListener("mouseover", botoesTransparentes);
botaoCopiarHover.addEventListener("mouseout", botoesTransparentes);



botoesHover.forEach(e => {
    e.addEventListener("mouseover", function(evento) {
        if (window.innerWidth > 768) {
            textAreaHover.blur();
        }
        bloqueia = false;
        for(let i = 0; i < textAreaHover.value.length; i++) {
            if(caracteresPermitidos.indexOf(textAreaHover.value[i]) == "-1") {
                bloqueia = true;
            }
        }

        if(textAreaHover.value.length == 0 || bloqueia) {
            msgAlerta.style.color = "#F00";
            msgAlerta.style.fontWeight = "bold";
            e.style.cursor = "not-allowed";
            bloqueiaBotao = true;
        } else {
            e.style.cursor = "pointer";
            bloqueiaBotao = false;
        }

        if(!mobile) {
            let classeBotao = evento.toElement.classList[0];
            if(classeBotao == "botao1") {
                botoesHover[1].classList.toggle("transparente");
                botaoCopiarHover.classList.toggle("transparente");
            } else if(classeBotao == "botao2") {
                botoesHover[0].classList.toggle("transparente");
                botaoCopiarHover.classList.toggle("transparente");
            } else if(classeBotaoCopiar == "botao-copiar") {
                botoesHover[0].classList.toggle("transparente");
                botoesHover[1].classList.toggle("transparente");
            }
        }
    });

    e.addEventListener("mouseout", () => {
        if (window.innerWidth > 768) {
            textAreaHover.focus();
        }
        msgAlerta.style.color = "#000";
        msgAlerta.style.fontWeight = "normal";

        if(botoesHover[0].classList.contains("transparente")) {
            botoesHover[0].classList.toggle("transparente");
            botaoCopiarHover.classList.toggle("transparente");
        } else if (botoesHover[1].classList.contains("transparente")) {
            botoesHover[1].classList.toggle("transparente");
            botaoCopiarHover.classList.toggle("transparente");
        }
    });
});