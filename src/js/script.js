const containerPadrao = document.querySelector(".container-padrao");
const containerMensagem = document.querySelector(".container-mensagem");

var trocar = true;

function trocarId() {
    if(trocar){
        containerMensagem.removeAttribute("id", "esconder");
        containerPadrao.setAttribute("id", "esconder");
    } else {
        containerPadrao.removeAttribute("id", "esconder");
        containerMensagem.setAttribute("id", "esconder");
    }
    trocar = !trocar;
}

botoes.forEach(e => {
    e.onclick = trocarId;
});