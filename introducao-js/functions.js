// Funcao sem retorno (procedure)
function inicio() {
    const mensagem = 'Estou iniciano...';
    console.log(mensagem);
}

// Funcao com retorno
function processa() {
    const mensagem = 'Estou processando...';
    return mensagem;
}

function run() {
    inicio();
    const resultado = processa();
    console.log(resultado);
}

run();