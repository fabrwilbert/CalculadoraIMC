function calculadoraIMC(){

    //entrada
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value

    //processamento
    let imc = (peso / (altura * altura))

    //saída
    document.getElementById("resultado").textContent = "O IMC é:" + imc
}

function calculadoraDesconto(){

    //entrada
    let valor = document.getElementById("valor").value
    let desconto = document.getElementById("desconto").value

    //processamento
    let ValorDescontado = valor - (valor * (desconto / 100))

    //saída
    document.getElementById("descontado").textContent = "O valor de " + valor + " com desconto de " + desconto + "% fica: " + ValorDescontado +"."
}

function calculadoraJurosSimples(){

    //entrada
    let valorInicial = document.getElementById("valorIni").value
    let meses = document.getElementById("prazo").value
    let taxa = document.getElementById("taxa").value

    //processamento
    let taxaporcento = taxa / 100
    let juros = (valorInicial * taxaporcento)
    let parcela = (valorInicial +++ juros) / meses

    //saida
    document.getElementById("parcela").textContent = "Você pagará: " + parcela + " Reais por mês."
}