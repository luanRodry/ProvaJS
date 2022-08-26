const valorA = document.querySelector('#valorA')
const valorB = document.querySelector('#valorB')
const valorC = document.querySelector('#valorC')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

const calcularRaizes = (a, b, c) => {
    a = Number.parseFloat(a)
    b = Number.parseFloat(b)
    c = Number.parseFloat(c)
    let raizes = []
    const delta = (b*b) - (4*a*c)
    if(delta >= 0){
        raizes.push((((-b) + Math.sqrt(delta))/2*a).toFixed(2))
        raizes.push((((-b) - Math.sqrt(delta))/2*a).toFixed(2))
        return raizes
    }else{
        return 'Delta é negativo.'
    }
   
}

calcular.onclick = () => {
    if(valorA.value == ""){
        valorA.focus()
    }else if(valorB.value == ""){
        valorB.focus()
    }else if(valorC.value == ""){
        valorC.focus()
    }else{
        resultado.value = calcularRaizes(valorA.value, valorB.value, valorC.value)
    }
}