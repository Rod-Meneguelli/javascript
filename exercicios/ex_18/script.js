let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resul = document.querySelector('div#resul')
let valores = []

// função para validar se é numero ou não 
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) < 101) {
        return true
    } else {
        return false
    }
}

// função para validar se já está na lista. O "-1" é aquele valor que o JS mostra quando não encontra a informação 
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

/* verificar se o valor é número ou se já está na lista
acrescenta na lista e tambem no vetor
*/
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // valores.push adiciona elementos no vetor
        //adicionar o elemento no select
        let item = document.createElement('option') //cria o elemento com a tag option
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resul.innerHTML = '' // limpa o resultado se eu adicionar mais numeros

    } else {
        window.alert('Valor inválido ou já consta na lista.')
    }
    num.value = ''
    num.focus()

}

function finalizar() {
    //se o vetor estiver vazio:
    if (valores.length == 0) {
        window.alert('Entre com valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0] // o primeiro numero será o maior e menor numero  
        let menor = valores[0]
        let soma = 0
        let media = 0
        // para cada posição em valores - laço de percurso para varrer o vetor inteiro
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) 
                maior = valores[pos]
            
            if(valores[pos] < menor) 
                menor = valores[pos]
            }

        media = soma / total    
        resul.innerHTML = '' 
        resul.innerHTML += `<p> Temos ${total} números cadastrados: </p>` //mostrar o resultado da analise
        resul.innerHTML += `<p> O maior valor foi ${maior} </p>`
        resul.innerHTML += `<p> O menor valor foi ${menor} </p>`
        resul.innerHTML += `<p> A soma dos valores é ${soma} </p>`
        resul.innerHTML += `<p> A média dos valores é ${media} </p>`
    
    }
}