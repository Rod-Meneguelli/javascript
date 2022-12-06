//window.alert('começo ok!')
function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var intervalo = document.getElementById('txtint')
    var res = document.getElementById('resul')

    if (ini.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0) {
        //window.alert('[ERRO] Pendente informações')
        res.innerHTML = `\u{1F914} <br>Faltam informações. Não consigo contar! \u{1F625}`
    } else {
       res.innerHTML = 'Contando ==>> <br>'
       var i = Number(ini.value)
       var f = Number(fim.value)
       var int = Number(intervalo.value)

       if (i < f) {
        //contagem crescente
        for(var cont = i; cont <= f; cont += int){
            res.innerHTML += ` ${cont} - `  
       }    
    } else {
            //contagem decrescente
            for(var cont = i; cont >= f; cont -= int){
            res.innerHTML += `${cont} - `
            }
        }
        res.innerHTML += `Fim \u{1F44D}`
    }




}