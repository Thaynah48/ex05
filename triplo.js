function calcular(){
    const numero = Number(document.getElementById("numero").value)
    const operacao = document.getElementById("operacao").value
    const res = document.getElementById("resultado")

    if (document.getElementById("numero").value === ""){
        res.innerText = "Digite um número!"
        return
    }
    if (document.getElementById === ""){
        res.innerText = "Selecione uma operação!"
        return
    }
    let resultado

    if (operacao === "dobro"){
        resultado = numero * 2
    }else if (operacao === "triplo"){
        resultado = numero * 3
    }else{
        res.innerText = "Escolha uma operação válida"
        return 
    }

    res.innerText = `O ${operacao} de ${numero} é ${resultado}`
}

function limpar(){
    document.getElementById("numero").value = ""
    document.getElementById("operacao").value = ""
    document.getElementById("resultado").innerText = ""
}
