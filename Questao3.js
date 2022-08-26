const nota = document.querySelector('#nota')
const mostrarResultado = document.querySelector('#mostrarResultado')
const resultado = document.querySelector('#resultado')

const calcularResultado = n => {
    n = Number.parseInt(n)
    if((n >= 0) && (n <= 100)){
        let quociente = (n/5) + 1
        quociente = Number.parseInt(quociente)
        let proximoMultiplo = 5*quociente
        let diferenca = proximoMultiplo - n
        if((n >= 38) && (diferenca < 3)){
            n = proximoMultiplo
        }
        if(n >= 40){
            return `Nota: ${n}. Aprovado.`
        }else{
            return `Nota: ${n}. Reprovado.`
        }
    }else{
        return 'Nota Inválida!'
    }
}

mostrarResultado.onclick = () => {
    if(nota.value == ""){
        nota.focus()
    }else{
        resultado.value = calcularResultado(nota.value)
    }
}