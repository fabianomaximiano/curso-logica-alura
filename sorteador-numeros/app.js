function sortear(){
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let NumerosSorteados = [];
    let numero;

    for (let i = 0; i < quantidadeNumeros; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while(NumerosSorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);  
        }

        NumerosSorteados.push(numero);
    }
    //alert(NumerosSorteados);
    //novo merge request

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${NumerosSorteados}</label>`;
    alterarStatusBotao(); 
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
    
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}