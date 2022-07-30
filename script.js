/*
Requisitos:

Carne - 400 gr por Pessoa               + de 6 horas - 650.
Cerveja - 1200 ml por Pessoa            + de 6 horas - 2000 ml.
Refrigerante - 1000 ml por Pessoa  + de 6 horas - 1500 ml.

crianças valem 0,5 Pessoa.
*/

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

var resultado = document.getElementById("resultado");


function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let carne = adultos * carnePP(duracao) + criancas * carnePP(duracao)/2;
    let cerveja = adultos * cervejaPP(duracao);
    let refri = adultos * refriPP(duracao) + criancas * refriPP(duracao)/2;

    resultado.innerHTML = `
        <p>${carne/1000} Kg de carne.</p>
        `;
    resultado.innerHTML += `
        <p>${Math.ceil(cerveja/600)} garrafas de cerveja.</p>
        `;
    resultado.innerHTML += `
        <p>${Math.ceil(refri/600)} litros de refri.</p>
        `;
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function refriPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
