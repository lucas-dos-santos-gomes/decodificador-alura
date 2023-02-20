var mobile;
var head = document.querySelector("head");
var css = "body main .container .botoes ul li:hover, .container-mensagem .botao-copiar:hover { transform: scale(1.0) }";
var style = document.createElement('style');

function verificarMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true;

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        
        head.appendChild(style);
    } else {
        mobile = false;
        if(head.lastElementChild.tagName == "STYLE") {
            head.removeChild(style);
        }
    }
}

verificarMobile();
window.onload = verificarMobile;
window.addEventListener("resize", verificarMobile);