const lista=document.querySelector("ul");
let contadorJogadas=0;
let tempo=-1; //VALOR INICIAL PARA -1 PARA QUE O DELAY DO SETINTERVAL NAO "MASCARE" O TEMPO REAL E O CONTADOR COMECE EM 0
let idInterval;
// CRIANDO OBJETOS
const objBobrossparrot={
    nomeGif:"bobrossparrot",
    idImg:"bobrossparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const objExplodyparrot={
    nomeGif:"explodyparrot",
    idImg:"explodyparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const objFiestaparrot={
    nomeGif:"fiestaparrot",
    idImg:"fiestaparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const objMetalparrot={
    nomeGif:"metalparrot",
    idImg:"metalparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const objRevertitparrot={
    nomeGif:"revertitparrot",
    idImg:"revertitparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const objTripletsparrot={
    nomeGif:"tripletsparrot",
    idImg:"tripletsparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
const objUnicornparrot={
    nomeGif:"unicornparrot",
    idImg:"unicornparrot",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0
}
//CRIANDO UMA ARRAY DOS OBJETOS DAS CARTAS DIFERENTES DO JOGO 
const todasAsCartas=[objBobrossparrot,objExplodyparrot,objFiestaparrot,objMetalparrot,objRevertitparrot,objTripletsparrot,objUnicornparrot];
//CRIANDO ARRAY DE OBJETOS DAS CARTAS QUE SERÃO USADAS NO JOGO
function gerarVetorCartas(quantidade){
    let j=0;
    const cartas=[];
    //GERA UM NOVO OBJETO PARA PODER DIFERENCIAR AS CARTAS POR IDS DIFERENTES
  	let novoObje={
    nomeGif:"",
    idImg:"",
    transicaoCartaFront:'',
    transicaoCartaBack:'',
    numeroDaJogada:0}
    for (let i=0;i<quantidade;i++){
        novoObje={
            nomeGif:"",
            idImg:"",
            transicaoCartaFront:'',
            transicaoCartaBack:'',
            numeroDaJogada:0}
        cartas.push(todasAsCartas[i]);
        j++;
        cartas.push(Object.assign(novoObje,todasAsCartas[i]));
        cartas[j].idImg=`${cartas[j].idImg}.2`;
        j++;
    }
    return cartas;
}
//FUNÇÃO DE COMPARAÇÃO DO SORT PARA DISPOR AS CARTAS ALEATORIAMENTE
function comparador() { 
	return Math.random() - 0.5;
}
//FUNÇÃO QUE ADICIONA AS CARTAS AO JOGO
function adicionarCartas(){
        lista.innerHTML="";
    for (let i=0;i<cartas.length;i++){
        lista.innerHTML+=
    `<li>
        <div data-test="card" id=${cartas[i].idImg} class="carta-parrot-front" onclick="verificarCarta(this)">
            <div class="front-face face ${cartas[i].transicaoCartaFront}">
                <img data-test="face-down-image" src="/imagens/front.png" alt="ilustração de um papagaio"/>
            </div>
            <div class="back-face face ${cartas[i].transicaoCartaBack}">
                <img data-test="face-up-image" src="/gifs/${cartas[i].nomeGif}.gif" alt="gif de um papagaio"/>
            </div>
        </div>         
    </li>` 
    }
}
//DISTRIBUIÇÃO DE CARTAS
function distribuirCartas() {
    let numeroDeCartas = Number(prompt("Olá! Esse é o Parrot Game. Por favor, digite um número par de cartas que seja entre 4 e 14"));
    while (!numeroDeCartas) {
      numeroDeCartas = Number(prompt("[ERRO] Esse número não é válido, digite um número par de 4 a 14."));
    }
    while (numeroDeCartas < 4 ||numeroDeCartas > 14 ||numeroDeCartas % 2 !== 0) {
      if(!numeroDeCartas){
        numeroDeCartas = Number(prompt("Não foi possível identificar o número válido de cartas, digite um número par de 4 a 14."));
      }

      if (numeroDeCartas < 4) {
        numeroDeCartas = Number(prompt("Escolha um número maior que 4 e menor que 14"));
      }
      if (numeroDeCartas > 14) {
        numeroDeCartas = Number(prompt("Escolha um número menor que 14"));
      }
      if (numeroDeCartas && numeroDeCartas % 2 !== 0) {
        numeroDeCartas = Number(prompt("Digite um número par"));
      }
    }
    let numeroDeCartasDiferentes = numeroDeCartas / 2;
    cartas = gerarVetorCartas(numeroDeCartasDiferentes);
    cartas.sort(comparador); // Após esta linha, as cartas estarão embaralhadas
    adicionarCartas();
  }
distribuirCartas();
//CHAMANDO A FUNÇÃO DE CONTROLE DO TEMPO
cronometro();
//FUNÇÃO PARA VIRAR A CARTA
function virarCarta(element){
    let divFace=element.querySelector("div");
    let divBack=element.querySelector("div+div");
    divBack.classList.toggle("transicao-back-face");
    divFace.classList.toggle("transicao-front-face");
}
//VERIFICAR SE A CARTA PODE SER VIRADA E EXECUTANDO A FUNÇÃO DE VIRAR A CARTA
 function verificarCarta(elemento){
    let idCarta=elemento.id;
    //ENCONTRAR O INDEX NO ARRAY DE CARTAS DO OBJETO RELACIONADO AO ELEMENTO QUE FOI CLICADO
    let indexElementoClicado;
    let count=0;
    for (let j=0;j<cartas.length;j++){
        if(cartas[j].idImg===idCarta){
            indexElementoClicado=j;
        }
        if(cartas[j].numeroDaJogada===1){
            count++;
        }
    }
    if(count<=1 && cartas[indexElementoClicado].numeroDaJogada===0){
        cartas[indexElementoClicado].numeroDaJogada=1;
        count++;
        virarCarta(elemento);
        contadorJogadas++;
        if(count===1){return;}
    } 
    if(count===2 && cartas[indexElementoClicado].numeroDaJogada===1){
        for (let i=0;i<cartas.length;i++){
            if(cartas[i].nomeGif===cartas[indexElementoClicado].nomeGif && cartas[i].idImg!==idCarta && cartas[i].numeroDaJogada===1){
                cartas[indexElementoClicado].numeroDaJogada=2;
                cartas[i].numeroDaJogada=2;
                finalizarJogo();
                return;
            }
        }
        for(let k=0;k<cartas.length;k++){
            if(cartas[k].numeroDaJogada===1 && cartas[k].idImg!==idCarta){
                cartas[k].numeroDaJogada=0;
                cartas[indexElementoClicado].numeroDaJogada=0;
                setTimeout(function(){
                    let divFace=elemento.querySelector("div");
                    let divBack=elemento.querySelector("div+div");
                    divBack.classList.toggle("transicao-back-face");
                    divFace.classList.toggle("transicao-front-face");
                    element=document.getElementById(cartas[k].idImg);
                    divFace=element.querySelector("div");
                    divBack=element.querySelector("div+div"); 
                    divBack.classList.toggle("transicao-back-face");
                    divFace.classList.toggle("transicao-front-face");
                },1000);
                return;
            }
        } 
    }  
}
function finalizarJogo(){
    let count=0;
    for (let l=0;l<cartas.length;l++){
        if(cartas[l].numeroDaJogada===2){
            count++;
        }
    }
    if(count===cartas.length){
        clearInterval(idInterval);
        //setTimeout para permitir que a carta vire completamente!
        setTimeout(function(){
            alert(`Você ganhou em ${contadorJogadas} jogadas e ${tempo} segundos! 🏆`);
            resposta=prompt("Deseja jogar novamente? Digite sim ou não");
            while(resposta!=="não" && resposta!=="sim"){
                resposta=prompt("[ERRO]]Caso queira jogar, responda com sim (letras todas minúsculas). Caso não deseja jogar novamente, responda com não (letras minúsculas e com ~)")
            }
            if(resposta==="sim"){
                lista.innerHTML+="";
                contadorJogadas=0;
                for (let i=0;i<cartas.length;i++){
                    cartas[i].idImg=cartas[i].nomeGif;
                    cartas[i].transicaoCartaBack="";
                    cartas[i].transicaoCartaFront="";
                    cartas[i].numeroDaJogada=0;
                }
                distribuirCartas();
                tempo=-1;
                cronometro();
            }
        },100);
    }
}

function cronometro(){
    idInterval=setInterval(contarTempo,1000);
}
function contarTempo(){
    tempo++;
    if(tempo<10){
        document.querySelector(".cronometro").innerHTML=`⏲️00:0${tempo}`;
    }else if(tempo<60){
        document.querySelector(".cronometro").innerHTML=`⏲️00:${tempo}`;
    }else{
        let minutos=Math.floor(tempo/60).toFixed(0);
        let segundos=tempo%60;
        if(segundos<10){
            if(minutos<10){
                document.querySelector(".cronometro").innerHTML=`⏲️0${minutos}:0${segundos}`;
            }else{
                document.querySelector(".cronometro").innerHTML=`⏲️${minutos}:0${segundos}`
            }
        }else{
            if(minutos<10){
                document.querySelector(".cronometro").innerHTML=`⏲️0${minutos}:${segundos}`
            }else{
                document.querySelector(".cronometro").innerHTML=`⏲️${minutos}:${segundos}`
            }
        }
    }
}