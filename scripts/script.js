//Função Ver mais no resumo
function toggleTextoResumo() {
    const textoCurto = document.querySelector('.texto-curto');
    const textoExpandido = document.querySelector('.texto-expandido');

    if (textoCurto.style.display == '') {
        textoCurto.style.display = 'none';
        textoExpandido.style.display = 'block';
    } else {
        textoCurto.style.display = '';
        textoExpandido.style.display = 'none';
    }
}

const resumoElemento = document.querySelector('.resumo');
resumoElemento.addEventListener('click', toggleTextoResumo);


//Inputs nas discussões 
function abrirCriarTopico() {
    const containerAddTopico = document.querySelector('.add-discussao');
    const containerTopicoEnviado = document.querySelector('.topico-enviado');
    const containerInicial = document.querySelector('.inicial');

    containerInicial.style.display = 'none'
    containerAddTopico.style.display = 'flex';
    containerTopicoEnviado.style.display = 'none';
}

const btnsCriar = document.querySelectorAll('.criar-topico');
btnsCriar.forEach(btn => {
    btn.addEventListener('click', abrirCriarTopico)
})

function abrirTopicoEnviado() {
    const containerAddTopico = document.querySelector('.add-discussao');
    const containerTopicoEnviado = document.querySelector('.topico-enviado');

    containerAddTopico.style.display = 'none';
    containerTopicoEnviado.style.display = 'flex';
}

function mostrarCardAguardando() {
    const cardAguardando = document.querySelector('.aguardando');
    cardAguardando.style.display = 'block';
}

const btnEnviar = document.querySelector('#btn-enviar');
btnEnviar.addEventListener('click', () => {
    abrirTopicoEnviado();
    mostrarCardAguardando();
})


//Respostas
function toggleRespostas() {
    const cardsRespostas = document.querySelector('.respostas-do-topico');

    if (cardsRespostas.style.display == 'none') {
        cardsRespostas.style.display = 'block';
    } else {
        cardsRespostas.style.display = 'none';
    }
}

const btnsAbrirRespostas = document.querySelectorAll("#respostas");
btnsAbrirRespostas.forEach(btn => {
    btn.addEventListener('click', toggleRespostas);
})