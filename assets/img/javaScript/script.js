let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa');


function validaNome () {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length >=4){
        txtNome.style.color = '#26733a';
        txtNome.innerHTML = 'Nome Válido ✔';
        nomeOk = true;
    }else{
        txtNome.style.color = '#732626';
        txtNome.innerHTML = 'Nome inválido - Insira pelo menos 4 caracteres ❌';
    }
}
function validaEmail (){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        txtEmail.innerHTML = 'Email Valido ✔';
        txtEmail.style.color = '#26733a'
    } else {
        txtEmail.style.color = '#732626'; 
        txtEmail.innerHTML = 'E-mail Inválido ❌';
    }
}
function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 120){

        txtAssunto.innerHTML ='Texto excedeu a quantidade permitida!!! ❌';
        txtAssunto.style.color = '#732626';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true || emailOk == true || assuntoOk == true) {
    alert('Enviado com Sucesso!!!');
    } else {
    alert('Preencha o formulário corretamente ❌');
    }
}

function mapaZoom() {
    mapa.style.width = '40vw'
    mapa.style.height = '50vh'
    mapa.style.zIndex = '15'
}

function mapaNormal() {
    mapa.style.width = '35vw'
    mapa.style.height = '35vh'
}

function subirTela() {
    window.scrollTo(0,0)
}