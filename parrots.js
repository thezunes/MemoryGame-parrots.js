iniciarjogo();

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
