import { botoes, botaoCopiar, textArea, bloqueiaCopiar, bloqueiaBotao } from "./hover.js";

const containerPadrao = document.querySelector(".container-padrao");
const containerMensagem = document.querySelector(".container-mensagem");
const mensagem = document.querySelector(".mensagem-cript");

var trocar = true;

function criptografar(texto) {
    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == 'a') {
            mensagem.value += "ai";
        } else if(texto[i] == 'e') {
            mensagem.value += "enter";
        } else if(texto[i] == 'i') {
            mensagem.value += "imes";
        } else if(texto[i] == 'o') {
            mensagem.value += "ober";
        } else if(texto[i] == 'u') {
            mensagem.value += "ufat";
        } else {
            mensagem.value += texto[i];
        }
    }
}

function descriptografar(texto) {
    if(texto.indexOf("ai") == -1 && texto.indexOf("enter") == -1 && texto.indexOf("imes") == -1 && texto.indexOf("ober") == -1 && texto.indexOf("ufat") == -1) {
        mensagem.value = "<Essa mensagem não possui uma criptografia>";
    } else {
        mensagem.value = texto.replaceAll("ai", 'a').replaceAll("enter", 'e').replaceAll("imes", 'i').replaceAll("ober", 'o').replaceAll("ufat", 'u');
    }
}

function trocarId(e) {
    if(bloqueiaBotao){
        return;
    }

    mensagem.value = "";
    if(e.srcElement.className == "botao1") {
        criptografar(textArea.value);
    } else if(e.srcElement.className == "botao2") {
        descriptografar(textArea.value);
    }

    if(trocar) {
        containerMensagem.removeAttribute("id", "esconder");
        containerPadrao.setAttribute("id", "esconder");
    }
    trocar = false;

    window.scroll(0,1000);
}

botoes.forEach(e => {
    e.onclick = trocarId;
});

botaoCopiar.addEventListener("click", () => {
    if(bloqueiaCopiar) {
        return;
    }

    mensagem.select();
    mensagem.setSelectionRange(0, mensagem.value.length);
    document.execCommand("copy");

    window.scroll(0,-1000);
    window.setTimeout(focar, 300)
});

function focar() {
    textArea.focus();
}

textArea.addEventListener("keydown", e => {
    if(e.key == "Delete" && e.shiftKey == true) {
        textArea.value = "";
    }
    
    if(e.key == "Enter" && e.altKey == true && e.shiftKey == false) {
        trocarId(e);
        criptografar(textArea.value);
    }
    
    if(e.key == "Enter" && e.altKey == true && e.shiftKey == true) {
        trocarId(e);
        descriptografar(textArea.value);
    }

    if(e.key == 'C' && e.altKey == true && e.shiftKey == true && trocar == false) {
        if(bloqueiaCopiar) {
            return;
        }
    
        mensagem.select();
        mensagem.setSelectionRange(0, mensagem.value.length);
        document.execCommand("copy");

        window.scroll(0,-1000);
        window.setTimeout(focar, 300);
    }
});