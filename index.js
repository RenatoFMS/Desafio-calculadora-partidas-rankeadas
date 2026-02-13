const prompt = require('prompt-sync')();

function QuantidadeVitorias(vitoria, derrotas){
    let total = vitoria - derrotas
    return total
}

function CalculoRank(total){
    let nomeRank

    if (total <= 10){
        nomeRank = "Ferro"
    }
    else if (total >= 11 && total <=20){
        nomeRank = "Bronze"
    }
    else if (total >= 21 && total <=50){
        nomeRank = "Prata"
    }
    else if (total >= 51 && total <=80){
        nomeRank = "Ouro"
    }
    else if (total >= 81 && total <=90){
        nomeRank = "Diamante"
    }
    else if (total >= 91 && total <=100){
        nomeRank = "Lendário"
    }
    else if (total >= 101){
        nomeRank = "Imortal"
    }

    return nomeRank
}

const totalVitoria = prompt("Digite o número de vitórias: ");
const totalDerrota = prompt("Digite o número de derrotas: ");

let calculovitorias = QuantidadeVitorias(totalVitoria,totalDerrota)

let rank = CalculoRank(calculovitorias)

console.log("O Herói tem de saldo de"+ calculovitorias + "está no nível de " + rank )

