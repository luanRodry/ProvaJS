const valor = document.querySelector('#valor')
const mostrarSequencia = document.querySelector('#mostrarSequencia')
const resultado = document.querySelector('#resultado')

// Adicionando a função replaceAt ao prototype que permite substituir um caractere
//a partir de sua posição na string

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    var chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
}

const retornaContagem = v => {
    v = Number.parseInt(v)
    let contagem = ''
    if(v > 0){
        for(let i = 1; i <= v; i++){
            if((i % 5 == 0) && (i % 9 != 0)){
                contagem += 'Luidy, '
            }else if((i % 9 == 0) && (i % 5 != 0)){
                contagem += 'Moura, '
            }else if((i % 5 == 0) && (i % 9 == 0)){
                contagem += 'LuidyMoura, '
            }else{
                contagem += i+', '
            }
        }
        contagem = contagem.replaceAt(contagem.length - 2, '.')
    }else{
        contagem = 'Valor Inválido!'
    }
    return contagem
}
mostrarSequencia.onclick = () => {
    if(valor.value == ""){
        valor.focus()
    }else{
        resultado.value = retornaContagem(valor.value)
    }
}