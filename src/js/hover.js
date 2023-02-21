import { mobile } from "./mobile.js";

export const botoes = document.querySelectorAll("li");
export const botaoCopiar = document.querySelector(".botao-copiar");
export const textArea = document.querySelector(".area-texto");
const msgAlerta = document.querySelector(".mensagem-alerta");

const caracteresPermitidos = "abcdefghijklmnopqrstuvwxyz \n";
export var bloqueiaCopiar;
export var bloqueiaBotao;
var bloqueia;

function bloquearCopiar() {
    let mensagemCript = document.querySelector(".mensagem-cript");
    
    if(mensagemCript.value == "<Essa mensagem não possui uma criptografia>") {
        botaoCopiar.style.cursor = "not-allowed";
        bloqueiaCopiar = true;
    } else {
        botaoCopiar.style.cursor = "pointer";
        bloqueiaCopiar = false;
    }
}

function botoesTransparentes(e) {
    if(!mobile) {
        for(let i = 0; i < botoes.length; i++) {
            botoes[i].classList.toggle("transparente");
        }
    }

    if(e.type == "mouseout" && window.innerWidth > 768) {
        textArea.focus();
    }

    bloquearCopiar();
}

botaoCopiar.addEventListener("mouseover", botoesTransparentes);
botaoCopiar.addEventListener("mouseout", botoesTransparentes);



botoes.forEach(e => {
    e.addEventListener("mouseover", function(evento) {
        if (window.innerWidth > 768) {
            textArea.blur();
        }
        bloqueia = false;
        for(let i = 0; i < textArea.value.length; i++) {
            if(caracteresPermitidos.indexOf(textArea.value[i]) == "-1") {
                bloqueia = true;
            }
        }

        if(textArea.value.length == 0 || bloqueia) {
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
                botoes[1].classList.toggle("transparente");
                botaoCopiar.classList.toggle("transparente");
            } else if(classeBotao == "botao2") {
                botoes[0].classList.toggle("transparente");
                botaoCopiar.classList.toggle("transparente");
            } else if(classeBotaoCopiar == "botao-copiar") {
                botoes[0].classList.toggle("transparente");
                botoes[1].classList.toggle("transparente");
            }
        }
    });

    e.addEventListener("mouseout", () => {
        if (window.innerWidth > 768) {
            textArea.focus();
        }
        msgAlerta.style.color = "#000";
        msgAlerta.style.fontWeight = "normal";

        if(botoes[0].classList.contains("transparente")) {
            botoes[0].classList.toggle("transparente");
            botaoCopiar.classList.toggle("transparente");
        } else if (botoes[1].classList.contains("transparente")) {
            botoes[1].classList.toggle("transparente");
            botaoCopiar.classList.toggle("transparente");
        }
    });
});