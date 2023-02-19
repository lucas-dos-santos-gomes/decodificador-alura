const containerPadrao = document.querySelector(".container-padrao");
const containerMensagem = document.querySelector(".container-mensagem");

const textArea = document.querySelector(".area-texto");
const mensagem = document.querySelector(".mensagem-cript");

const botoes = document.querySelectorAll("li");
const botaoCopiar = document.querySelector(".botao-copiar");

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
});

textArea.addEventListener("keydown", e => {
    if(e.key == "Delete" && e.shiftKey == true) {
        textArea.value = "";
    }
    
    if(e.key == "Enter" && e.shiftKey == true) {
        trocarId(e);
        criptografar(textArea.value);
    }
    
    if(e.key == "Enter" && e.altKey == true) {
        trocarId(e);
        descriptografar(textArea.value);
    }
});