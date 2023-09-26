function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularNivel(saldo) {
    
    let nivel = "";

    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo > 10 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo > 20 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo > 50 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo > 80 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo > 90 && saldo <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}



// Exemplo de uso das funções
const vitorias = 75;
const derrotas = 20;
const saldo = calcularSaldoVitorias(vitorias, derrotas);
const nivel = calcularNivel(saldo);

console.log(`O Herói tem um saldo de ${saldo} e está no nível de ${nivel}`);