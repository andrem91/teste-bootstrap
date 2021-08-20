let nome = document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");
let nomeOK = false;
let emailOk = false;
let assuntoOK = false;

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
    let txt = document.querySelector("#txtNome");
    if (nome.value.length < 3) {
        txt.innerHTML = "❌ Nome inválido!";
        txt.style.color = "red";
    } else {
        txt.innerHTML = "✔ Nome Válido";
        txt.style.color = "green";
        nomeOK = true;
    }
}

function validaEmail() {
    let txt = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txt.innerHTML = "❌ E-mail inválido!";
        txt.style.color = "red";
    } else {
        txt.innerHTML = "✔ E-mail válido!";
        txt.style.color = "green";
        emailOk = true;
    }
}

function validaAssunto() {
    let contadorDeCaracter = document.querySelector("#contadorDeCaracter");
    let txt = document.querySelector("#txtAssunto");
    contadorDeCaracter.innerHTML = assunto.value.length;
    if (assunto.value.length > 100) {
        txt.innerHTML = "❌ Texto é muito grande. Digite no máximo 100 caracteres";
        txt.style.color = "red";
        txt.style.display = "block"
    } else {
        txt.style.display = "none";
        assuntoOK = true;
    }
}

function enviar() {
    console.log(nomeOK);
    console.log(emailOk);
    console.log(assuntoOK);
    if (nomeOK == true && emailOk == true && assuntoOK == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente!")
    }
}

function mapaZoom() {
    mapa.style.width = "600px";
    mapa.style.height = "375px";
}

function mapaNormal() {
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}