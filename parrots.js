iniciarjogo();

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

const todasAsCartas=[objBobrossparrot,objExplodyparrot,objFiestaparrot,objMetalparrot,objRevertitparrot,objTripletsparrot,objUnicornparrot];

function cartas(quantidade) {

    let j=0;
    const cartas=[];d
s

    let novoObje={

        nomeGif:"",
        idImg:"",
        transicaoCartaFront:'',
        transicaoCartaBack:'',
        numeroDaJogada:0
    }
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
        cartas[j].idImg=`$cartas[j].idImg}.2;`.
        j++;
    }
    return cartas;
    
}

function comparador(){
    return Math.random() - 0.5;
}

function iniciarjogo() {

let qntcartas = Number(prompt("Por favor, digite o número de cartas para iniciar o jogo"));

    while (!qntcartas) {
    
        qntcartas = Number(prompt("Esse valor não é válido, digite um número entre 2 e 14, que seja par."));

    }

      while (qntcartas < 4 || qntcartas > 14 || qntcartas % 2 !== 0) {
        
        if(!qntcartas){
            qntcartas = Number(prompt("Digite um valor válido (Entre 4 e 14 e número par"));
          }

        if (qntcartas < 4 && qntcartas > 14) {
          qntcartas = Number(prompt("Digita um valor entre 4 e 14"));
        }
        
        if (qntcartas % 2 !== 0) {
          qntcartas = Number(prompt("Apenas números pares"));
        }
      }
    }


