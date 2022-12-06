function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, insira um número.')
    } else {
        var n = Number(num.value)
        var cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            var item = document.createElement('option')
            //parte de dentro do option
            item.text = `${n} x ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont++   


        }
    }
}