const lado1 = document.querySelector('#lado1')
const lado2 = document.querySelector('#lado2')
const lado3 = document.querySelector('#lado3')
const mostrarTipo = document.querySelector('#mostrarTipo')
const resultado = document.querySelector('#resultado')

const  retornaTipo = (l1, l2, l3) => {
    l1 = Number.parseFloat(l1)
    l2 = Number.parseFloat(l2)
    l3 = Number.parseFloat(l3)
    if((l1 > 0) && (l2 > 0) && (l3 > 0)){ //Não existe triângulos com lados negativos ou nulos
        if((l1 === l2) && ( l1 === l3)){
             return 'Triângulo Equilátero!'
        }else if((l1 !== l2) && (l1 !== l3) && (l2 !== l3)){
            return 'Triângulo Escaleno!'
        }else{
            return 'Triângulo Isósceles!'
        }
    }else{
        return 'Lado Inválido!'
    }
}

mostrarTipo.onclick = () => {
    if(lado1.value == ""){
        lado1.focus()
    }else if(lado2.value == ""){
        lado2.focus()
    }else if(lado3.value == ""){
        lado3.focus()
    }else{
        resultado.value = retornaTipo(lado1.value, lado2.value, lado3.value)
    }
}

