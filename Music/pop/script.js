// Declaração de variáveis
var player = document.getElementById('play'); // Elemento de áudio
var ant = document.getElementById('ant'); // Botão "Anterior"
var prox = document.getElementById('prox'); // Botão "Próximo"
var img_play = document.getElementById('img_play'); // Imagem de play/pause

//Musicas_display
var m1 = document.getElementById('m1');
var m2 = document.getElementById('m2');
var m3 = document.getElementById('m3');
var m4 = document.getElementById('m4');
var m5 = document.getElementById('m5');

var seek = document.getElementById('input'); // Controle de reprodução

var addres = ["audio/music_1.mp3", "audio/music_2.mp3", "audio/music_3.mp3", "audio/music_4.mp3", "audio/music_5.mp3"];

var pos = 1;

function select(x){
    pos = x;
    player.src = addres[pos - 1];
    img_play.src = 'https://i.pinimg.com/564x/2a/c7/a3/2ac7a39bf6021df0bac14e355f61a5c0.jpg';
    player.pause();
    player.play();
}

function select_m1(){
    m1.style.background = 'rgba(255, 255, 255, 0.6)';
    m2.style.background = 'rgba(255, 255, 255, 0.15)';
    m3.style.background = 'rgba(255, 255, 255, 0.15)';
    m4.style.background = 'rgba(255, 255, 255, 0.15)';
    m5.style.background = 'rgba(255, 255, 255, 0.15)';
}

function select_m2(){
    m2.style.background = 'rgba(255, 255, 255, 0.6)';
    m1.style.background = 'rgba(255, 255, 255, 0.15)';
    m3.style.background = 'rgba(255, 255, 255, 0.15)';
    m4.style.background = 'rgba(255, 255, 255, 0.15)';
    m5.style.background = 'rgba(255, 255, 255, 0.15)';
}

function select_m3(){
    m3.style.background = 'rgba(255, 255, 255, 0.6)';
    m2.style.background = 'rgba(255, 255, 255, 0.15)';
    m1.style.background = 'rgba(255, 255, 255, 0.15)';
    m4.style.background = 'rgba(255, 255, 255, 0.15)';
    m5.style.background = 'rgba(255, 255, 255, 0.15)';
}

function select_m4(){
    m4.style.background = 'rgba(255, 255, 255, 0.6)';
    m3.style.background = 'rgba(255, 255, 255, 0.15)';
    m2.style.background = 'rgba(255, 255, 255, 0.15)';
    m1.style.background = 'rgba(255, 255, 255, 0.15)';
    m5.style.background = 'rgba(255, 255, 255, 0.15)';
}

function select_m5(){
    m5.style.background = 'rgba(255, 255, 255, 0.6)';
    m4.style.background = 'rgba(255, 255, 255, 0.15)';
    m3.style.background = 'rgba(255, 255, 255, 0.15)';
    m2.style.background = 'rgba(255, 255, 255, 0.15)';
    m1.style.background = 'rgba(255, 255, 255, 0.15)';
}

function escolha(){
    if(pos == 1){
        select_m1();
    }
    if(pos == 2){
        select_m2();
    }
    if(pos == 3){
        select_m3();
    }
    if(pos == 4){
        select_m4();
    }
    if(pos == 5){
        select_m5();
    }
}

// Função para retroceder
function voltar() {
    pos -= 1;
    if (pos < 1) {
        pos = 5;
    }
    player.src = addres[pos - 1];

    // Verifica se a imagem de reprodução/pausa não é a imagem de pausa e inicia a reprodução
    if (img_play.src != 'https://i.pinimg.com/564x/e0/67/e4/e067e4714184d3072b804504cc8843ff.jpg') {
        player.pause();
        player.play();
    }
    escolha();
    seek.value = 0;
}

// Função para avançar
function proximo() {
    pos += 1;
    if (pos > 5) {
        pos = 1;
    }
    player.src = addres[pos - 1];


    // Verifica se a imagem de reprodução/pausa não é a imagem de pausa e inicia a reprodução
    if (img_play.src != 'https://i.pinimg.com/564x/e0/67/e4/e067e4714184d3072b804504cc8843ff.jpg') {
        player.pause();
        player.play();
    }
    escolha();
    seek.value = 0;
}

// Event Listeners para os botões "Anterior" e "Próximo"
ant.addEventListener('click', function() {
    voltar();
});

prox.addEventListener('click', function() {
    proximo();
});

// Define um intervalo para verificar a cada segundo
let interval = setInterval(function() {
    seek.addEventListener('input', function() {
        player.currentTime = (seek.value / 100) * player.duration;
    });

    // Verifica se o áudio está tocando
    if (!player.paused && !player.ended) {
        seek.value = player.currentTime * (100 / player.duration);
    }

    // Verifica se o áudio terminou e passa para a próxima faixa
    if (player.ended) {
        proximo();
    }
}, 1000);

// Função de play e pause
img_play.addEventListener('click', function() {

    // Verifica se a URL da imagem é a esperada e inicia a música
    if (img_play.src == 'https://i.pinimg.com/564x/e0/67/e4/e067e4714184d3072b804504cc8843ff.jpg') {
        img_play.src = 'https://i.pinimg.com/564x/2a/c7/a3/2ac7a39bf6021df0bac14e355f61a5c0.jpg';
        player.play();
        escolha();
    } else {
        // Caso contrário, deixa a imagem de pausa e pausa a música
        img_play.src = 'https://i.pinimg.com/564x/e0/67/e4/e067e4714184d3072b804504cc8843ff.jpg';
        player.pause();
    }
});



m1.addEventListener('click', function(){
    select(1);
    escolha();
});

m2.addEventListener('click', function(){
    select(2);
    escolha();
});

m3.addEventListener('click', function(){
    select(3);
    escolha();
});

m4.addEventListener('click', function(){
    select(4);
    escolha();
});

m5.addEventListener('click', function(){
    select(5);
    escolha();
});
