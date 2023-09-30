function toggleAudio() {
    var audio = document.getElementById("myAudio");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


function adicionarComentario() {
    var nomeAutor = document.getElementById("nomeAutor").value;
    var novoComentario = document.getElementById("novoComentario").value;
    var comentariosDiv = document.getElementById("comentarios");

    if (nomeAutor.trim() !== "" && novoComentario.trim() !== "") {
        var comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

        var nomeElement = document.createElement("strong");
        nomeElement.textContent = nomeAutor + ": ";

        var comentarioText = document.createElement("span");
        comentarioText.textContent = novoComentario;

        comentarioDiv.appendChild(nomeElement);
        comentarioDiv.appendChild(comentarioText);

        comentariosDiv.appendChild(comentarioDiv);

        document.getElementById("nomeAutor").value = "";
        document.getElementById("novoComentario").value = "";
    }
}

var totalAvaliacoes = 0;
var somaAvaliacoes = 0;

function avaliar(avaliacao) {
    totalAvaliacoes++;
    somaAvaliacoes += avaliacao;
    var media = somaAvaliacoes / totalAvaliacoes;
    document.getElementById("media").textContent = media.toFixed(1);
}

