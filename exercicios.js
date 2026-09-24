 EXERCÍCIO 1 - COMPRINHAS ONLINE
// ==========================================

function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes) {
    let total = 0;

    produtos.forEach(function(produto) {
        total += caixa[produto];
    });

    if (fretes[cidade] !== undefined) {
        total += fretes[cidade];
    } else {
        total += fretes["Outros"];
    }

    return total;
}


// Tabela de produtos
const caixa = {
    "Arroz": 7.10,
    "Feijão": 2.30,
    "Macarrão": 4.70,
    "Refrigerante": 3.00
};

// Tabela de fretes
const fretes = {
    "São Paulo": 10.10,
    "Rio de Janeiro": 12.30,
    "Brasília": 14.70,
    "Outros": 13.00
};

// Teste do Exercício 1
console.log(
    "Exercício 1:",
    calculaValorTotalDaCompra(["Arroz"], "São Paulo", caixa, fretes)
);


// ==========================================
// EXERCÍCIO 2 - RETIRANDO O EXCESSO
// ==========================================

function removeDuplicatas(numeros) {
    return [...new Set(numeros)];
}

// Teste do Exercício 2
console.log(
    "Exercício 2:",
    removeDuplicatas([1, 1, 2, 2, 3, 3])
);


// ==========================================
// EXERCÍCIO 3 - SEI TUDO SOBRE VARIÁVEIS
// ==========================================

var arrayFuncoes = [];

for (var i = 0; i < 10; i++) {
    arrayFuncoes.push(function() {
        console.log(i);
    });
}

console.log("Exercício 3 - Código original:");

arrayFuncoes.forEach(function(funcao) {
    funcao();
});


// Ajustando o comportamento utilizando ES6
const arrayFuncoesES6 = [];

for (let i = 0; i < 10; i++) {
    arrayFuncoesES6.push(function() {
        console.log(i);
    });
}

console.log("Exercício 3 - Utilizando let:");

arrayFuncoesES6.forEach(function(funcao) {
    funcao();
});


// ==========================================
// EXERCÍCIO 4 - NÃO ESTOU ENTENDENDO MAIS NADA
// ==========================================

const jogador = {};

jogador.nome = "Rodrigo";
jogador.idade = 33;

console.log(
    "Exercício 4:",
    jogador.nome + "_" + jogador.idade
);


// ==========================================
// EXERCÍCIO 5 - TUDO FORA DE ESCOPO
// ==========================================

const status = [
    { codigo: "OK", resposta: "Sucesso" },
    { codigo: "FAILED", resposta: "Erro" },
    { codigo: "PENDING", resposta: "Pendente" }
];

let mensagem = "";
const codigoAtual = "OK";

for (let i = 0; i < status.length; i++) {
    if (status[i].codigo === codigoAtual) {
        mensagem = status[i].resposta;
    }
}

console.log("Exercício 5:", mensagem);
